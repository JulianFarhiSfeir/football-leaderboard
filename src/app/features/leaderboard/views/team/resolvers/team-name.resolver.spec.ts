import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { teamNameResolver } from './team-name.resolver';

describe('teamNameResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => teamNameResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
