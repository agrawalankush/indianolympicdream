import { TestBed } from '@angular/core/testing';

import { AthletesResolverService } from './athletes-resolver.service';

describe('AthletesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AthletesResolverService = TestBed.get(AthletesResolverService);
    expect(service).toBeTruthy();
  });
});
