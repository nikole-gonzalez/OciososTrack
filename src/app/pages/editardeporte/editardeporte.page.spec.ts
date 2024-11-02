import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditardeportePage } from './editardeporte.page';

describe('EditardeportePage', () => {
  let component: EditardeportePage;
  let fixture: ComponentFixture<EditardeportePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditardeportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
