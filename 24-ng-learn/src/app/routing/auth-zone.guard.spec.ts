import { TestBed } from '@angular/core/testing';

import { AuthZoneGuard } from './auth-zone.guard';

describe('AuthZoneGuard', () => {
  let guard: AuthZoneGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthZoneGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
