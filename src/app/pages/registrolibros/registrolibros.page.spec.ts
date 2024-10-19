import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrolibrosPage } from './registrolibros.page';

describe('RegistrolibrosPage', () => {
  let component: RegistrolibrosPage;
  let fixture: ComponentFixture<RegistrolibrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrolibrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
