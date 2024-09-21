import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, ToastController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {

  login = {
    nombreLogin: "",
    contrasenaLogin: ""
  };

  campos: string = "";

  @ViewChild('imgLogin', { read: ElementRef, static: true })
  imgLogin!: ElementRef;

  private animation!: Animation;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private animationController: AnimationController
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.createAnimation();
  }

  validaModeloLogin(model: any): boolean {
    for (const [key, value] of Object.entries(model)) {
      if (value === "") {
        this.campos = key;
        return false;
      }
    }
    return true;
  }

  validaNombreUsuario(nombre: string): boolean {
    return nombre.length >= 3;
  }

  validaContrasena(contrasena: string): boolean {
    const patronMayuscula = /[A-Z]/; 
    return contrasena.length >= 6 && patronMayuscula.test(contrasena);
  }

  ingresarLogin() {
    if (this.validaModeloLogin(this.login)) {
      if (!this.validaNombreUsuario(this.login.nombreLogin)) {
        this.presentToast("top", "El nombre de usuario debe tener al menos 3 caracteres");
      } else if (!this.validaContrasena(this.login.contrasenaLogin)) {
        this.presentToast("top", "La contraseña debe tener al menos 6 caracteres y una mayúscula");
      } else {
        this.router.navigate(['/home']);
        this.presentToast("top", "Bienvenido ");
      }
    } else {
      this.presentToast("top", "Faltan datos por completar");
    }
  }

  redirigeContrasena() {
    this.router.navigate(['/recupera-contrasena']);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensajeToast: string) {
    const toast = await this.toastController.create({
      message: mensajeToast,
      duration: 3000,
      position: position,
    });

    await toast.present();
  }

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
}
