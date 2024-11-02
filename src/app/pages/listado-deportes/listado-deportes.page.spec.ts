import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoDeportesPage } from './listado-deportes.page';

describe('ListadoDeportesPage', () => {
  let component: ListadoDeportesPage;
  let fixture: ComponentFixture<ListadoDeportesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeportesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
