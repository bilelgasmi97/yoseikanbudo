import { TestBed } from '@angular/core/testing';

import { EmailappService } from './emailapp.service';

describe('EmailappService', () => {
  let service: EmailappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
