import { TestBed } from '@angular/core/testing';

import { ShowsResolverService } from './shows-resolver.service';

describe('ShowsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowsResolverService = TestBed.get(ShowsResolverService);
    expect(service).toBeTruthy();
  });
});
