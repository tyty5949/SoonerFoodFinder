import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {PostTag} from '../search-metadata/post-tag';
import {STATUSES} from '../mocks/mock-post-statuses';

@Injectable({
  providedIn: 'root'
})
export class PostStatusService {

  constructor() { }

  public getPostStatuses(): Observable<PostTag[]> {
    return of(STATUSES);
  }
}
