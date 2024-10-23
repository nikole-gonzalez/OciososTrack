import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarlibrosPage } from './editarlibros.page';

describe('EditarlibrosPage', () => {
  let component: EditarlibrosPage;
  let fixture: ComponentFixture<EditarlibrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarlibrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
