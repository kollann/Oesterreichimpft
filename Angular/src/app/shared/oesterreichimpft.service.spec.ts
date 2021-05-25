import { TestBed } from '@angular/core/testing';

import { OesterreichimpftService } from './oesterreichimpft.service';

describe('OesterreichimpftService', () => {
  let service: OesterreichimpftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OesterreichimpftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
