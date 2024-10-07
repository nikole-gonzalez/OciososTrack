import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthlocalService } from '../services/authlocal.service'; // Asegúrate de importar tu servicio

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthlocalService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.gUsuarioAutenticado()) {
      return true; // Permite el acceso si está autenticado
    } else {
      this.router.navigate(['/login']); // Redirige al login si no está autenticado
      return false;
    }
  }
}


