import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  //Función validación modelo 
  validaRecupera(model: any): boolean {
    for (const [key, value] of Object.entries(model)) {
      if (value === "") {
        this.campoRecupera = key;
        return false;
      }
    }
    return true;
  }

    /*async enviarRecuperacion() {
      const auth = getAuth();
      const email = this.recuperaContrasena.recuperaCorreo;
  
      if (email.trim() === '') {
        this.presentToast('top','Por favor, ingresa tu correo electrónico.');
        return;
      }
  
      try {
        // Generar enlace de restablecimiento de contraseña con Firebase
        await sendPasswordResetEmail(auth, email);
  
        // Enviar correo usando EmailJS
        this.enviarCorreoConEmailJS(email);
      } catch (error) {
        console.error('Error al generar el enlace:', error);
        this.presentToast('top','No se pudo generar el enlace. Verifica tu correo.');
      }
    }
  
    async enviarCorreoConEmailJS(email: string) {
      try {
        const response: EmailJSResponseStatus = await emailjs.send(
          'service_etcm26h', // Reemplaza con tu Service ID
          'template_8ftztf7', // Reemplaza con tu Template ID
          { to_email: email, reset_link:  }, // Parámetros del template (configúralo en EmailJS)
          '6G_hXjXwtk6PDvo_Y' // Reemplaza con tu Public Key
        );
  
        console.log('Correo enviado con éxito:', response.status, response.text);
        this.presentToast('top','Correo de recuperación enviado correctamente.');
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        this.presentToast('top','Error al enviar el correo. Inténtalo nuevamente.');
      }
    } */

    


  // Función que valida el correo

  validaCorreo(correo: string): boolean {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expresión regular para validar correo
    return patron.test(correo);
  }

  // Función para enviar el email

  async enviarRecuperacion() {
    if (this.validaRecupera(this.recuperaContrasena)) {
      if (this.validaCorreo(this.recuperaContrasena.recuperaCorreo)) {
        try {
          // Llamada a EmailJS para enviar el correo
          const response: EmailJSResponseStatus = await emailjs.send(
            'service_etcm26h', 
            'template_8ftztf7', 
            { to_email: this.recuperaContrasena.recuperaCorreo },
            '6G_hXjXwtk6PDvo_Y' 
          );

          console.log('Correo enviado con éxito', response.status, response.text);
          this.presentToast('top','Correo enviado correctamente. Revisa tu bandeja.');
        } catch (error) {
          console.error('Error al enviar el correo:', error);
          this.presentToast('top', 'Error al enviar el correo. Inténtalo nuevamente.');
        }
      } else {
        this.presentToast('top', 'Correo no válido.');
      }
    } else {
      this.presentToast('top', 'Falta completar el campo.');
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



