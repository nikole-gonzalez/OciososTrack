import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlueyPage } from './bluey.page';

describe('BlueyPage', () => {
  let component: BlueyPage;
  let fixture: ComponentFixture<BlueyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
