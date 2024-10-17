import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class FirebaseLoginService {

  /*constructor(private authfire: AngularFireAuth, private router : Router) { }

  login(correoFire:string, contrasenaFire:string){
    return this.authfire.signInWithEmailAndPassword(correoFire, contrasenaFire);
  }

  logout (){
    return this.authfire.signOut().then(()=>{
      this.router.navigate(['/login']);
    })

  } 

  export class AutheticationService{ */

    constructor (public ngFireAuth : AngularFireAuth){}
    
    async registerUser (email:string, password:string){
      return await this.ngFireAuth.createUserWithEmailAndPassword(email, password)

    }
  
    async loginUser (email:string, password:string){
      return await this.ngFireAuth.signInWithEmailAndPassword(email, password)
    }
  
    async resetPassword (email:string){
      return await this.ngFireAuth.sendPasswordResetEmail(email)
    }
  
    async signOut (){
      return await this.ngFireAuth.signOut()
    }
  
    async getProfile (){
      return await this.ngFireAuth.currentUser
    }
  
   
  }


