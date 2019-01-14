import { TestBed, inject } from '@angular/core/testing';

import { PostFreeTypeService } from './post-free-type.service';

describe('PostFreeTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostFreeTypeService]
    });
  });

  it('should be created', inject([PostFreeTypeService], (service: PostFreeTypeService) => {
    expect(service).toBeTruthy();
  }));
});
