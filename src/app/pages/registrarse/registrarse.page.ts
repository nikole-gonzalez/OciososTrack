import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {


  registro={
    nombreUsuarioReg: "",
    correoReg: "",
    contrasenaReg: "",
    contrasenaRepetidaReg: "" 
  };

  campos: string=""; 

  constructor( private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  validaModeloRegistro(model: any): boolean {
    for (const [key, value] of Object.entries(model)) {
      if (value === "") {
        this.campos = key;
        return false;
      }
    }
    return true;
  }

    // Validación que el nombre tenga más de 3 caracteres 
    validaNombreUsuarioReg(nombre: string): boolean {
      return nombre.length >= 3;
    }
  
    // Validación que la contraseña tenga almenos una letra mayúscula y una extensión de 6 caracteres. 
    validaContrasenaReg1(contrasena: string): boolean {
      const patronMayuscula = /[A-Z]/; 
      return contrasena.length >= 6 && patronMayuscula.test(contrasena);
    }

    // Validación que la contraseña tenga almenos una letra mayúscula y una extensión de 6 caracteres. 
    validaContrasenaReg2(contrasena: string): boolean {
      const patronMayuscula = /[A-Z]/; 
      return contrasena.length >= 6 && patronMayuscula.test(contrasena);
    }

    // Función que valida el correo

    validaCorreoReg(correo: string): boolean {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expresión regular para validar correo
    return patron.test(correo);
  }


    
    registraUsuario() {
      if (this.validaModeloRegistro(this.registro)) {
        if (!this.validaNombreUsuarioReg(this.registro.nombreUsuarioReg)) {
          this.presentToast("top", "El nombre de usuario debe tener al menos 3 caracteres");
        } else if (!this.validaCorreoReg(this.registro.correoReg)){
          this.presentToast("top", "Correo no válido")
        } else if (!this.validaContrasenaReg1(this.registro.contrasenaReg)) {
          this.presentToast("top", "La contraseña debe tener al menos 6 caracteres y una mayúscula");
        }else if (!this.validaContrasenaReg2(this.registro.contrasenaRepetidaReg)) {
          this.presentToast("top", "La contraseña debe tener al menos 6 caracteres y una mayúscula");
        } else if (this.registro.contrasenaReg !== this.registro.contrasenaRepetidaReg) {
          this.presentToast("top", "La contraseñas contraseñas deben ser iguales");
        } else {
          this.router.navigate(['/login']);
        }
      } else {
        this.presentToast("top", "Faltan datos por completar");
      }
    }


    async presentToast(position: 'top' | 'middle' | 'bottom', mensajeToast: string) {
      const toast = await this.toastController.create({
        message: mensajeToast,
        duration: 3000,
        position: position,
      });
  
      await toast.present();
    }
  




}
