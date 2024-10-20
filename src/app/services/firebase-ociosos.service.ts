import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Libros } from '../class/libros';
import { FirebaseLoginService } from './firebase-login.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseOciososService {

  private coleccionLibros ='libros';

  constructor(private firestore: AngularFirestore, private firebaseLogin: FirebaseLoginService) { }

  //Obtengo todos los libros 
  getLibros() {
    return this.firestore.collection<Libros>(this.coleccionLibros).valueChanges({idField: 'idLibros'});

  }
  // Agregar libros
  agregarLibros(libro: Libros) {
    return this.firestore.collection('libros').add({...libro}).then(docRef => {
      // Una vez que Firebase genera el ID, lo asignamos al libro
      const idGenerado = docRef.id;
      this.firestore.collection('libros').doc(idGenerado).update({ idLibro: idGenerado });
    });
  }

  // Modifico información del libro
  actualizarLibro(libro:Libros){
    return this.firestore.collection(this.coleccionLibros).doc(libro.idLibro).update({...libro});

  }
  
  // Elimino libro
  eliminarLibro(id: string){
    return this.firestore.collection(this.coleccionLibros).doc(id).delete();

  }


}
