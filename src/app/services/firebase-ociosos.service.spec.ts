import { TestBed } from '@angular/core/testing';

import { FirebaseOciososService } from './firebase-ociosos.service';

describe('FirebaseOciososService', () => {
  let service: FirebaseOciososService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseOciososService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
