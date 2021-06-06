import { TestBed } from '@angular/core/testing';

import { UnauthZoneGuard } from './unauth-zone.guard';

describe('UnauthZoneGuard', () => {
  let guard: UnauthZoneGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnauthZoneGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
