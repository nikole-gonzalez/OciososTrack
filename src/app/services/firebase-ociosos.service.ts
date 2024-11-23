import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Libros } from '../class/libros';
import { FirebaseLoginService } from './firebase-login.service';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { Observable, of } from 'rxjs';
import { Streaming } from '../class/streaming';
import { Deportes } from '../class/deportes';
import { Arte } from '../class/arte';
import { Juego } from '../class/juego';

@Injectable({
  providedIn: 'root'
})
export class FirebaseOciososService {

  private coleccionLibros ='libros';
  private coleccionStreaming = 'streaming';
  private coleccionDeportes = 'deportes';
  private coleccionArtes = 'artes';
  private coleccionJuegos = 'juegos';
  private storage = getStorage (initializeApp(environment.firebaseConfig));
  userId: any;

  constructor(private firestore: AngularFirestore, private firebaseLogin: FirebaseLoginService) {
    this.firebaseLogin.getProfile().then(user=> {
      this.userId = user?.uid
      console.log(this.userId)
    })
   }

   //--------LIBROS--------//

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


//--------STREAMING--------//


 //Obtengo todos los streamings por usuario
 getStreaming(): Observable<Streaming[]> {
  return this.firestore.collection<Streaming>(this.coleccionStreaming, ref => 
    ref.where('userId', '==', this.userId)
  ).valueChanges({ idField: 'idStreaming' });
}

  // Elimino streaming
  eliminarStreaming(id: string){
    return this.firestore.collection(this.coleccionStreaming).doc(id).delete();

  }

  
  // Método para subir una imagen al storage de streaming
  async subirImagenYObtenerURLStreaming(foto: string, nombre: string): Promise<string> {
    const storageRefStreaming = ref(this.storage, `streaming/${nombre}`);
    await uploadString(storageRefStreaming, foto, 'data_url');
    return await getDownloadURL(storageRefStreaming);
  }

  // Agregar Streaming
  agregarStreaming(streaming: Streaming) {
    if (this.userId) {
      const streamingConUserId = { ...streaming, userId: this.userId };
      return this.firestore.collection('streaming').add(streamingConUserId).then(docRef => {
        const idGeneradoStreaming = docRef.id;
        return this.firestore.collection('streaming').doc(idGeneradoStreaming).update({ idStreaming: idGeneradoStreaming });
      });
    } else {
      return Promise.reject('No se encontró UserId');
    }
  }

  // Modifico información del streaming
  actualizarStreaming(streaming: Streaming) {
    return this.firestore.collection('streaming').doc(streaming.idStreaming).update({
      tituloStreaming: streaming.tituloStreaming,
      imagenStreamingURL: streaming.imagenStreamingURL,
      plataformaStreaming: streaming.plataformaStreaming,
      comentarioStreaming: streaming.comentarioStreaming,
      valoracionStreaming: streaming.valoracionStreaming,
      fotoStreaming: streaming.fotoStreaming
    });
  }

  // Obtener un streaming por su ID
  getStreamingById(idStreaming: string): Observable<Streaming> {
    return this.firestore.collection('streaming').doc(idStreaming).valueChanges() as Observable<Streaming>;
  }

  //--------DEPORTES--------//


 //Obtengo todos los deportes por usuario
 getDeportes(): Observable<Deportes[]> {
  return this.firestore.collection<Deportes>(this.coleccionDeportes, ref => 
    ref.where('userId', '==', this.userId)
  ).valueChanges({ idField: 'idDeporte' });
}

  // Elimino deporte
  eliminarDeporte(id: string){
    return this.firestore.collection(this.coleccionDeportes).doc(id).delete();

  }

  
  // Método para subir una imagen al storage de deporte
  async subirImagenYObtenerURLDeportes(foto: string, nombre: string): Promise<string> {
    const storageRefDeporte = ref(this.storage, `deporte/${nombre}`);
    await uploadString(storageRefDeporte, foto, 'data_url');
    return await getDownloadURL(storageRefDeporte);
  }

  // Agregar deporte
  agregarDeporte(deporte : Deportes) {
    if (this.userId) {
      const deporteConUserId = { ...deporte, userId: this.userId };
      return this.firestore.collection('deportes').add(deporteConUserId).then(docRef => {
        const idGeneradoDeporte = docRef.id;
        return this.firestore.collection('deportes').doc(idGeneradoDeporte).update({ idDeporte: idGeneradoDeporte });
      });
    } else {
      return Promise.reject('No se encontró UserId');
    }
  }

  // Modifico información del deporte
  actualizarDeporte(deporte: Deportes) {
    return this.firestore.collection('deportes').doc(deporte.idDeporte).update({
      nombreDeporte: deporte.nombreDeporte,
      imagenDeporteURL: deporte.imagenDeporteURL,
      lugarDeporte: deporte.lugarDeporte,
      comentarioDeporte: deporte.comentarioDeporte,
      valoracionEntrenamiento: deporte.valoracionEntrenamiento,
      fotoCamaraDeporte: deporte.fotoCamaraDeporte,
      fechaDeporte : deporte.fechaDeporte
    });
  }

  // Obtener un deporte por su ID
  getDeporteById(idDeporte: string): Observable<Deportes> {
    return this.firestore.collection('deportes').doc(idDeporte).valueChanges() as Observable<Deportes>;
  }

  //-------------ARTES ----------------------//

   //Obtengo todos los artes por usuario
 getArtes(): Observable<Arte[]> {
  return this.firestore.collection<Arte>(this.coleccionArtes, ref => 
    ref.where('userId', '==', this.userId)
  ).valueChanges({ idField: 'idArte' });
}

  // Elimino arte
  eliminarArte(id: string){
    return this.firestore.collection(this.coleccionArtes).doc(id).delete();

  }

  
  // Método para subir una imagen al storage de arte
  async subirImagenYObtenerURLArte(foto: string, nombre: string): Promise<string> {
    const storageRefArte = ref(this.storage, `artes/${nombre}`);
    await uploadString(storageRefArte, foto, 'data_url');
    return await getDownloadURL(storageRefArte);
  }

  // Agregar arte
  agregarArte(artes : Arte) {
    if (this.userId) {
      const arteConUserId = { ...artes, userId: this.userId };
      return this.firestore.collection('artes').add(arteConUserId).then(docRef => {
        const idGeneradoArte = docRef.id;
        return this.firestore.collection('artes').doc(idGeneradoArte).update({ idArte: idGeneradoArte });
      });
    } else {
      return Promise.reject('No se encontró UserId');
    }
  }

  // Modifico información arte
  actualizarArte(artes: Arte) {
    return this.firestore.collection('artes').doc(artes.idArte).update({

      nombreArte: artes.nombreArte,
      imagenArteURL: artes.imagenArteURL,
      descripcionArte: artes.descripcionArte,
      valoracionArte: artes.valoracionArte,
      materialesArte: artes.materialesArte,
      fotoCamaraArte: artes.fotoCamaraArte,

    });
  }

  // Obtener un arte por su ID
  getArteById(idArte: string): Observable<Arte> {
    return this.firestore.collection('artes').doc(idArte).valueChanges() as Observable<Arte>;
  }

//------------------Juegos----------------------//

   //Obtengo todos los juegos por usuario
   getJuegos(): Observable<Juego[]> {
    return this.firestore.collection<Juego>(this.coleccionJuegos, ref => 
      ref.where('userId', '==', this.userId)
    ).valueChanges({ idField: 'idJuego' });
  }
  
    // Elimino juegos
    eliminarJuego(id: string){
      return this.firestore.collection(this.coleccionJuegos).doc(id).delete();
  
    }
  
    
    // Método para subir una imagen al storage de juegos
    async subirImagenYObtenerURLJuego(foto: string, nombre: string): Promise<string> {
      const storageRefJuego = ref(this.storage, `juegos/${nombre}`);
      await uploadString(storageRefJuego, foto, 'data_url');
      return await getDownloadURL(storageRefJuego);
    }
  
    // Agregar juegos
    agregarJuego(juegos : Juego) {
      if (this.userId) {
        const juegoConUserId = { ...juegos, userId: this.userId };
        return this.firestore.collection('juegos').add(juegoConUserId).then(docRef => {
          const idGeneradoJuego = docRef.id;
          return this.firestore.collection('juegos').doc(idGeneradoJuego).update({ idArte: idGeneradoJuego });
        });
      } else {
        return Promise.reject('No se encontró UserId');
      }
    }
  
    // Modifico información del juego
    actualizarJuego(juegos: Juego) {
      return this.firestore.collection('juegos').doc(juegos.idJuego).update({
  
        nombreJuego: juegos.nombreJuego,
        imagenJuegoURL: juegos.imagenJuegoURL,
        descripcionJuego: juegos.descripcionJuego,
        valoracionJuego: juegos.valoracionJuego,
        formatoJuego: juegos.formatoJuego,
        fotoCamaraJuego: juegos.fotoCamaraJuego,
  
      });
    }
  
    // Obtener un streaming por su ID
    getJuegoById(idJuego: string): Observable<Juego> {
      return this.firestore.collection('juegos').doc(idJuego).valueChanges() as Observable<Juego>;
    }


 




}