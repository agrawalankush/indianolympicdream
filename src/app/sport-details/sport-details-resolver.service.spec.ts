import { TestBed } from '@angular/core/testing';

import { SportDetailsResolverService } from './sport-details-resolver.service';

describe('SportDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportDetailsResolverService = TestBed.get(SportDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
