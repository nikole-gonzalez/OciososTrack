import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User} from 'firebase/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FirebaseLoginService {
  User: User | null = null;

    constructor (public ngFireAuth : AngularFireAuth, private firestore : AngularFirestore){}

    //por si
    /*
    async registerUser (email:string, password:string){
      return await this.ngFireAuth.createUserWithEmailAndPassword(email, password)

    }*/

      async registerUser(email: string, password: string, nombre: string) {
        const userCredential = await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
        if (userCredential.user) {
          // Guardar información en Firestore
          await this.firestore.collection('users').doc(userCredential.user.uid).set({
            nombre,
            correo: email
          });
        }
        return userCredential;
      }
  
    async loginUser(email: string, password: string): Promise<string | null> {
      const userCredential = await this.ngFireAuth.signInWithEmailAndPassword(email, password);
      if (userCredential.user) {
        return await userCredential.user.getIdToken(); // Obtiene el token de Firebase
      }
      return null;
    }
  
    async resetPassword (email:string){
      return await this.ngFireAuth.sendPasswordResetEmail(email)
    }
  
    async signOut (){
      return await this.ngFireAuth.signOut()
    }

    async getProfile (){
      return new Promise <User | null> ((resolve, reject)=>{
        this.ngFireAuth.onAuthStateChanged(user =>{
          if (user) {
            resolve (user as User) 
          }else{
            resolve(null)
          }
        }, reject)
      })
    } 

    

  //NUEVO  
  // Método para obtener la información del usuario autenticado
  
  
  async gObtenerUsuarioActual(): Promise<User | null> {
    return (await this.ngFireAuth.currentUser) as User | null;
  }

  async obtenerDatosUsuario(uid: string) {
    const userDoc = await this.firestore.collection('users').doc(uid).get().toPromise();
    return userDoc?.data();
  }
  

}
  


