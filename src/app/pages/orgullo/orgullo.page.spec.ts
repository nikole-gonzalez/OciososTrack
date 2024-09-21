import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrgulloPage } from './orgullo.page';

describe('OrgulloPage', () => {
  let component: OrgulloPage;
  let fixture: ComponentFixture<OrgulloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgulloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
