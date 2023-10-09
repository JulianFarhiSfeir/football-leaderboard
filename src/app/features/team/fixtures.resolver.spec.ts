import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { fixturesResolver } from './fixtures.resolver';

describe('fixturesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => fixturesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
