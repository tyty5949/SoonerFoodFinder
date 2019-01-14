import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {TYPES} from '../mocks/mock-post-types';
import {PostType} from '../search-metadata/post-type';

@Injectable({
  providedIn: 'root'
})
export class PostTypeService {

  constructor() { }

  public getPostTypes(): Observable<PostType[]> {
    return of(TYPES);
  }
}
