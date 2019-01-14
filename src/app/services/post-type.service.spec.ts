import { TestBed, inject } from '@angular/core/testing';

import { PostTypeService } from './post-type.service';

describe('PostTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostTypeService]
    });
  });

  it('should be created', inject([PostTypeService], (service: PostTypeService) => {
    expect(service).toBeTruthy();
  }));
});
