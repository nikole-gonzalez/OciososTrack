import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrojuegoPage } from './registrojuego.page';

describe('RegistrojuegoPage', () => {
  let component: RegistrojuegoPage;
  let fixture: ComponentFixture<RegistrojuegoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrojuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
