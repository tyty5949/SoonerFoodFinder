import { Injectable } from '@angular/core';
import { FREE_TYPES } from '../mocks/mock-post-free-types';
import { Observable, of } from 'rxjs';
import { PostFreeType } from '../search-metadata/post-free-type';

@Injectable({
  providedIn: 'root'
})
export class PostFreeTypeService {

  constructor() { }

  public getPostFreeTypes(): Observable<PostFreeType[]> {
    return of(FREE_TYPES);
  }
}
