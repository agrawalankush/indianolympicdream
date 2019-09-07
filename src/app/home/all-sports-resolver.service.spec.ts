import { TestBed } from '@angular/core/testing';

import { AllSportsResolverService } from './all-sports-resolver.service';

describe('AllSportsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllSportsResolverService = TestBed.get(AllSportsResolverService);
    expect(service).toBeTruthy();
  });
});
