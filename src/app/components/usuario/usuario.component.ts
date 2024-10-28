import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseLoginService } from 'src/app/services/firebase-login.service';
import { User } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent  implements OnInit {
  usuario: any; 
  
  constructor(private router : Router, private firebaseLogin : FirebaseLoginService, private firestore : AngularFirestore) { }

  
  
  /*async obtenerUsuario(): Promise<void> {
    this.usuario = await this.firebaseLogin.gObtenerUsuarioActual();
  }*/

    ngOnInit(): void {
      this.obtenerUsuario();
    }
  
    async obtenerUsuario(): Promise<void> {
      // Obtener el usuario actual de Firebase
      const user = await this.firebaseLogin.gObtenerUsuarioActual();
      if (user && user.uid) {
        // Si tenemos el UID, llamar a obtenerDatosUsuario con el UID
        this.usuario = await this.obtenerDatosUsuario(user.uid);
      } else {
        console.error('No se pudo obtener el usuario actual o el UID');
      }
    }

  goToHome() {
    this.router.navigate(['/home']);
  }

  async obtenerDatosUsuario(uid: string) {
    const userDoc = await this.firestore.collection('users').doc(uid).get().toPromise();
    return userDoc?.data();
  }

}
