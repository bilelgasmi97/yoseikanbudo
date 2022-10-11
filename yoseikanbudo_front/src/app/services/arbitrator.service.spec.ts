import { TestBed } from '@angular/core/testing';

import { ArbitratorService } from './arbitrator.service';

describe('ArbitratorService', () => {
  let service: ArbitratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbitratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
