import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { unSavedChangesGuard } from './un-saved-changes.guard';

describe('unSavedChangesGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unSavedChangesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
