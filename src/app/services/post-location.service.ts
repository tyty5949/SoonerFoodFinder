import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {PostLocation} from '../search-metadata/post-location';
import {LOCATIONS} from '../mocks/mock-post-locations';

@Injectable({
  providedIn: 'root'
})
export class PostLocationService {

  constructor() { }

  public getPostLocations(): Observable<PostLocation[]> {
    return of(LOCATIONS);
  }
}
