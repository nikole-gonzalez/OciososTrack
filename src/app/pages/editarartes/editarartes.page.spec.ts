import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarartesPage } from './editarartes.page';

describe('EditarartesPage', () => {
  let component: EditarartesPage;
  let fixture: ComponentFixture<EditarartesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarartesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
