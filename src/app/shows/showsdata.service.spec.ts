import { TestBed } from '@angular/core/testing';

import { ShowsdataService } from './showsdata.service';

describe('ShowsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowsdataService = TestBed.get(ShowsdataService);
    expect(service).toBeTruthy();
  });
});
