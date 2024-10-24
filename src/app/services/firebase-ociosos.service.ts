import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Libros } from '../class/libros';
import { FirebaseLoginService } from './firebase-login.service';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseOciososService {

  private coleccionLibros ='libros';
  private storage = getStorage (initializeApp(environment.firebaseConfig));
  userId: any;

  constructor(private firestore: AngularFirestore, private firebaseLogin: FirebaseLoginService) {
    this.firebaseLogin.getProfile().then(user=> {
      this.userId = user?.uid
      console.log(this.userId)
    })
   }

   //Obtengo todos los libros por usuario
   getLibros(): Observable<Libros[]> {
    return this.firestore.collection<Libros>(this.coleccionLibros, ref => 
      ref.where('userId', '==', this.userId)
    ).valueChanges({ idField: 'idLibro' });
  }


  // Método para subir una imagen al storage
  async subirImagenYObtenerURL(foto: string, nombre: string): Promise<string> {
    const storageRef = ref(this.storage, `libros/${nombre}`);
    await uploadString(storageRef, foto, 'data_url');
    return await getDownloadURL(storageRef);
  }
  
  // Agregar libros
  agregarLibros(libro: Libros) {
    if (this.userId) {
      const libroConUserId = { ...libro, userId: this.userId };
      return this.firestore.collection('libros').add(libroConUserId).then(docRef => {
        const idGenerado = docRef.id;
        return this.firestore.collection('libros').doc(idGenerado).update({ idLibro: idGenerado });
      });
    } else {
      return Promise.reject('No se encontró UserId');
    }
  }


  // Modifico información del libro
  
  //actualizarLibro(idLibro: string, libro: Libros) {
    //return this.firestore.collection('libros').doc(idLibro).update({
      //tituloLibro: libro.tituloLibro,
      //imagenLibroURL : libro.imagenLibroURL,
      //autorLibro: libro.autorLibro,
      //comentarioLibro: libro.comentarioLibro,
      //valoracionLibro: libro.valoracionLibro,
      //fotoCamaraLibro: libro.fotoCamaraLibro
    //});
  //}

  
  // Modifico información del libro
  actualizarLibro(libro: Libros) {
    return this.firestore.collection('libros').doc(libro.idLibro).update({
      tituloLibro: libro.tituloLibro,
      imagenLibroURL: libro.imagenLibroURL,
      autorLibro: libro.autorLibro,
      comentarioLibro: libro.comentarioLibro,
      valoracionLibro: libro.valoracionLibro,
      fotoCamaraLibro: libro.fotoCamaraLibro
    });
  }
    
  // Elimino libro
  eliminarLibro(id: string){
    return this.firestore.collection(this.coleccionLibros).doc(id).delete();

  }

// Obtener un libro por su ID
getLibroById(idLibro: string): Observable<Libros> {
  return this.firestore.collection('libros').doc(idLibro).valueChanges() as Observable<Libros>;
}
}

