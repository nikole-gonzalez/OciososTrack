import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseLoginService } from 'src/app/services/firebase-login.service';
import { User } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthlocalService } from 'src/app/services/authlocal.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent  implements OnInit {
  usuario: any; 
  loading = true;
  
  constructor(private router : Router, private firebaseLogin : FirebaseLoginService, private firestore : AngularFirestore, public authLocalService : AuthlocalService ) { }

  
  
  /*async obtenerUsuario(): Promise<void> {
    this.usuario = await this.firebaseLogin.gObtenerUsuarioActual();
  }*/

    /*ngOnInit(): void {
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
    } */

      async ngOnInit() {
        try {
          this.loading = true;
          await this.obtenerUsuario();
        } finally {
          this.loading = false;  // Cuando termina la carga
        }
      }
      async obtenerUsuario(): Promise<void> {
        try {
          const user = await this.firebaseLogin.gObtenerUsuarioActual();
          if (user && user.uid) {
            this.usuario = await this.obtenerDatosUsuario(user.uid);
          } else {
            console.error('No se pudo obtener el usuario actual o el UID');
          }
        } catch (error) {
          console.error('Error al obtener usuario:', error);
        }
      }

  goToHome() {
    this.router.navigate(['/home']);
  }

  async obtenerDatosUsuario(uid: string) {
    const userDoc = await this.firestore.collection('users').doc(uid).get().toPromise();
    return userDoc?.data();
  }

   // Función para cerrar sesión
  gcerrarSesion() {
    this.authLocalService.gCerrarSesion();
    this.router.navigate(['/login']);
  }

}
