import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FirebaseLoginService } from 'src/app/services/firebase-login.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  regForm: FormGroup;

  constructor( private router: Router, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public authService: FirebaseLoginService, private toastController: ToastController) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      nombreUsuarioReg: "",
      correoReg: "",
      contrasenaReg: "",
      contrasenaRepetidaReg: "" 
    })
  }

  get errorControl(){
    return this.regForm.controls;
  }
/*
  async signUp (){
      if(!this.validaNombreUsuarioReg(this.regForm.value.nombreUsuarioReg)) {
      this.presentToast("top", "El nombre de usuario debe tener al menos 3 caracteres");
    } else if (!this.validaCorreoReg(this.regForm.value.correoReg)){
      this.presentToast("top", "Correo no válido")
    } else if (!this.validaContrasenaReg1(this.regForm.value.contrasenaReg)) {
      this.presentToast("top", "La contraseña debe tener al menos 6 caracteres y una mayúscula");
    }else if (!this.validaContrasenaReg2(this.regForm.value.contrasenaRepetidaReg)) {
      this.presentToast("top", "La contraseña debe tener al menos 6 caracteres y una mayúscula");
    } else if (this.regForm.value.contrasenaReg !== this.regForm.value.contrasenaRepetidaReg) {
      this.presentToast("top", "La contraseñas contraseñas deben ser iguales");
    } else {
      const loading = await this.loadingCtrl.create({
        duration:3000
      })    
      await loading.present();
      const user = await this.authService.registerUser(this.regForm.value.correoReg, this.regForm.value.contrasenaReg).catch((error) =>{
        console.log(error);
        loading.dismiss()
      })

      if (user){
        loading.dismiss()
        this.router.navigate(['/home'])
      }else{
        console.log('Ingrese datos correctos')
        this.presentToast("top", "Faltan campos por rellenar");

      }
    }

  }*/

    async signUp() {
      if (!this.validaNombreUsuarioReg(this.regForm.value.nombreUsuarioReg)) {
        this.presentToast("top", "El nombre de usuario debe tener al menos 3 caracteres");
      } else if (!this.validaCorreoReg(this.regForm.value.correoReg)) {
        this.presentToast("top", "Correo no válido");
      } else if (!this.validaContrasenaReg1(this.regForm.value.contrasenaReg)) {
        this.presentToast("top", "La contraseña debe tener al menos 6 caracteres y una mayúscula");
      } else if (this.regForm.value.contrasenaReg !== this.regForm.value.contrasenaRepetidaReg) {
        this.presentToast("top", "Las contraseñas deben ser iguales");
      } else {
        const loading = await this.loadingCtrl.create({ duration: 3000 });
        await loading.present();
        
        const user = await this.authService.registerUser(
          this.regForm.value.correoReg,
          this.regForm.value.contrasenaReg,
          this.regForm.value.nombreUsuarioReg    
        ).catch((error) => {
          console.log(error);
          loading.dismiss();
        });
    
        if (user) {
          loading.dismiss();
          this.router.navigate(['/home']);
        } else {
          console.log('Ingrese datos correctos');
          this.presentToast("top", "Faltan campos por rellenar");
        }
      }
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

    async presentToast(position: 'top' | 'middle' | 'bottom', mensajeToast: string) {
      const toast = await this.toastController.create({
        message: mensajeToast,
        duration: 3000,
        position: position,
      });
  
      await toast.present();
    }

}
