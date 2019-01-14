import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {PostTag} from '../search-metadata/post-tag';
import {TAGS} from '../mocks/mock-post-tags';

@Injectable({
  providedIn: 'root'
})
export class PostTagService {

  constructor() { }

  public getPostTags(): Observable<PostTag[]> {
    return of(TAGS);
  }
}
