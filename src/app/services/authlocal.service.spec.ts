import { TestBed } from '@angular/core/testing';

import { AuthlocalService } from './authlocal.service';

describe('AuthlocalService', () => {
  let service: AuthlocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthlocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
