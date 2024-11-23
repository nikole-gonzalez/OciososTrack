import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoJuegoPage } from './listado-juego.page';

describe('ListadoJuegoPage', () => {
  let component: ListadoJuegoPage;
  let fixture: ComponentFixture<ListadoJuegoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoJuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
