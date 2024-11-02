import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrodeportePage } from './registrodeporte.page';

describe('RegistrodeportePage', () => {
  let component: RegistrodeportePage;
  let fixture: ComponentFixture<RegistrodeportePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrodeportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
