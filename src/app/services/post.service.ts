import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../post/post';
import { MOCK_POSTS_ACTIVE } from '../mocks/mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  public getActivePosts(): Observable<Post[]> {
    return of(MOCK_POSTS_ACTIVE);
  }
}
