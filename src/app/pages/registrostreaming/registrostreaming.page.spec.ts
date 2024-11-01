import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrostreamingPage } from './registrostreaming.page';

describe('RegistrostreamingPage', () => {
  let component: RegistrostreamingPage;
  let fixture: ComponentFixture<RegistrostreamingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrostreamingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
