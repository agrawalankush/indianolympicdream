import { TestBed } from '@angular/core/testing';

import { SwupdateService } from './swupdate.service';

describe('SwupdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwupdateService = TestBed.get(SwupdateService);
    expect(service).toBeTruthy();
  });
});
