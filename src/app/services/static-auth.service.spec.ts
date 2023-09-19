import { TestBed } from '@angular/core/testing';

import { StaticAuthService } from './static-auth.service';

describe('StaticAuthService', () => {
  let service: StaticAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
