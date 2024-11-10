import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroartePage } from './registroarte.page';

describe('RegistroartePage', () => {
  let component: RegistroartePage;
  let fixture: ComponentFixture<RegistroartePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroartePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
