import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoSeriesPage } from './listado-series.page';

describe('ListadoSeriesPage', () => {
  let component: ListadoSeriesPage;
  let fixture: ComponentFixture<ListadoSeriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
