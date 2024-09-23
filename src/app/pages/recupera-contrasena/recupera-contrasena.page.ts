import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recupera-contrasena',
  templateUrl: './recupera-contrasena.page.html',
  styleUrls: ['./recupera-contrasena.page.scss'],
})
export class RecuperaContrasenaPage implements OnInit {

  recuperaContrasena = {
    recuperaCorreo: ""
  };

  campoRecupera: string = "";

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {}

  // Función validación modelo 
  validaRecupera(model: any): boolean {
    for (const [key, value] of Object.entries(model)) {
      if (value === "") {
        this.campoRecupera = key;
        return false;
      }
    }
    return true;
  }

  // Función que valida el correo

  validaCorreo(correo: string): boolean {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expresión regular para validar correo
    return patron.test(correo);
  }

  // Función de navegación 

  redirigeLogin() {
    if (this.validaRecupera(this.recuperaContrasena)) {
      if (this.validaCorreo(this.recuperaContrasena.recuperaCorreo)) {
        this.router.navigate(['/login']);
        this.presentToast("top", "Correo enviado correctamente ");
      } else {
        this.presentToast("top", "Correo no válido");
      }
    } else {
      this.presentToast("top", "Falta completar el campo");
    }
  }

  //Función del toast 
  
  async presentToast(position: 'top' | 'middle' | 'bottom', mensajeToast: string) {
    const toast = await this.toastController.create({
      message: mensajeToast,
      duration: 3000,
      position: position,
    });

    await toast.present();
  }

}



