import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarstreamingPage } from './editarstreaming.page';

describe('EditarstreamingPage', () => {
  let component: EditarstreamingPage;
  let fixture: ComponentFixture<EditarstreamingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarstreamingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
