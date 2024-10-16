import { TestBed } from '@angular/core/testing';

import { Sug1Service } from './sug1.service';

describe('Sug1Service', () => {
  let service: Sug1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sug1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
