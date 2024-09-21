import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperaContrasenaPage } from './recupera-contrasena.page';

describe('RecuperaContrasenaPage', () => {
  let component: RecuperaContrasenaPage;
  let fixture: ComponentFixture<RecuperaContrasenaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperaContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
