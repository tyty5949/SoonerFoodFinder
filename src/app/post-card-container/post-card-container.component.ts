import { Component, OnInit } from '@angular/core';
import {Post} from '../post/post';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-card-container',
  templateUrl: './post-card-container.component.html',
  styleUrls: ['./post-card-container.component.css']
})
export class PostCardContainerComponent implements OnInit {

  protected _posts: Post[];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getAllActivePosts();
  }

  private getAllActivePosts(): void {
    this.postService.getActivePosts().subscribe(posts => this._posts = posts);
  }

}
