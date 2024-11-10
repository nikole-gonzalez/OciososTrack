import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoArtesPage } from './listado-artes.page';

describe('ListadoArtesPage', () => {
  let component: ListadoArtesPage;
  let fixture: ComponentFixture<ListadoArtesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoArtesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
