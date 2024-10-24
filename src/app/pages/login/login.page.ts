import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationController, ToastController, Animation, LoadingController } from '@ionic/angular';
import { AuthlocalService } from 'src/app/services/authlocal.service';
import { FirebaseLoginService } from 'src/app/services/firebase-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {

  loginForm: FormGroup;

  @ViewChild('imgLogin', { read: ElementRef, static: true })
  imgLogin!: ElementRef;

  private animation!: Animation; 

  constructor( 
    private router: Router,
    public formBuilder: FormBuilder, 
    public loadingCtrl: LoadingController, 
    public authService: FirebaseLoginService, 
    private toastController: ToastController, 
    private animationController : AnimationController,
    private authLocalService: AuthlocalService) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      correoLogin: "",
      contrasenaLogin: ""
    })
  }

  get errorControl(){
    return this.loginForm.controls;
  }

  /*async login (){
    if(!this.validaCorreoLogin(this.loginForm.value.correoLogin)) {
      this.presentToast("top", "Correo no válido");
    } else if (!this.validaContrasena(this.loginForm.value.contrasenaLogin)) {
      this.presentToast("top", "La contraseña no coincide");
    } else {
      const loading = await this.loadingCtrl.create({
        duration:3000
      });
      await loading.present();
      const user = await this.authService.loginUser(this.loginForm.value.correoLogin, this.loginForm.value.contrasenaLogin).catch((error) =>{
        console.log(error);
        loading.dismiss()
      })

      if (user){
        loading.dismiss()
        this.router.navigate(['/home'])
      }else{
        console.log('Ingrese datos correctos')
        this.presentToast("top", "Correo o contraseña no válida");

      }
    }

  }*/

    async login() {
      if(!this.validaCorreoLogin(this.loginForm.value.correoLogin)) {
        this.presentToast("top", "Correo no válido");
      } else if (!this.validaContrasena(this.loginForm.value.contrasenaLogin)) {
        this.presentToast("top", "La contraseña no coincide");
      } else {
        const loading = await this.loadingCtrl.create({ duration: 3000 });
        await loading.present();
    
        const token = await this.authService.loginUser(this.loginForm.value.correoLogin, this.loginForm.value.contrasenaLogin).catch((error) => {
          console.log(error);
          loading.dismiss();
          return null;
        });
    
        if (token) {
          this.authLocalService.gInicioSesion(token); // Guarda el token en AuthlocalService
          loading.dismiss();
          this.router.navigate(['/home']);
        } else {
          console.log('Ingrese datos correctos');
          this.presentToast("top", "Correo o contraseña no válida");
          loading.dismiss();
        }
      }
    }
    

  redirigeContrasena() {
    this.router.navigate(['/recupera-contrasena']);
  }

  // Navegación al registro 
  ingresarRegistro(){
    this.router.navigate(['/registrarse'])
  }

  //Función del Toast 

  async presentToast(position: 'top' | 'middle' | 'bottom', mensajeToast: string) {
    const toast = await this.toastController.create({
      message: mensajeToast,
      duration: 3000,
      position: position,
    });

    await toast.present();
  }

  //Función de animación ionic 

  createAnimation() {
    const imgLoginAnimation = this.animationController
      .create()
      .addElement(this.imgLogin.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.5) rotate(0)' },
        { offset: 1, transform: 'scale(1) rotate(0)' },
      ]);

    this.animation = this.animationController
      .create()
      .duration(4000)
      .iterations(2)
      .addAnimation([imgLoginAnimation]);

    this.animation.play();
  }


  validaCorreoLogin(correo: string): boolean {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expresión regular para validar correo
    return patron.test(correo);
  
  }

  // Validación que la contraseña tenga almenos una letra mayúscula y una extensión de 6 caracteres. 
  validaContrasena(contrasena: string): boolean {
    const patronMayuscula = /[A-Z]/; 
    return contrasena.length >= 6 && patronMayuscula.test(contrasena);
  }



  ngAfterViewInit() {
    this.createAnimation();
  }


 /*

  //Función que permite ingresar a la aplicación. 

  ingresarLogin() {
    if (this.validaModeloLogin(this.login)) {
      if (!this.validaNombreUsuario(this.loginForm.value.nombreLogin)) {
        this.presentToast("top", "El nombre de usuario debe tener al menos 3 caracteres");
      } else if (!this.validaContrasena(this.loginForm.value.contrasenaLogin)) {
        this.presentToast("top", "La contraseña debe tener al menos 6 caracteres y una mayúscula");
      } else {
        // Simulamos recibir un token desde el servidor
        //const tokenSimulado = 'mi-token-de-autenticacion';
        
        // Guardamos el token en localStorage usando el servicio de autenticación
        //this.authlocal.gInicioSesion(tokenSimulado);

        // Navegamos al home
        this.loginFirebase.login(this.login.nombreLogin, this.login.contrasenaLogin).then(()=>{
          this.router.navigate(['/home'])
          this.presentToast("top", "Bienvenido ");
        })
       
      }
    } else { 
      this.presentToast("top", "Faltan datos por completar");
    }
  }
*/

}