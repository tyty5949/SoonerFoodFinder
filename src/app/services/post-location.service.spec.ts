import { TestBed, inject } from '@angular/core/testing';

import { PostLocationService } from './post-location.service';

describe('PostLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostLocationService]
    });
  });

  it('should be created', inject([PostLocationService], (service: PostLocationService) => {
    expect(service).toBeTruthy();
  }));
});
