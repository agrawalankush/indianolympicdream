import { TestBed } from '@angular/core/testing';

import { SportsdataService } from './sportsdata.service';

describe('SportsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportsdataService = TestBed.get(SportsdataService);
    expect(service).toBeTruthy();
  });
});
