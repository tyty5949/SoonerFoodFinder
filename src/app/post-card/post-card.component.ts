import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  protected _post: Post;
  protected _date: Date;

  @Input() set post(post: Post) {
    this._post = post;
  }

  ngOnInit() {
    this._date = new Date(this._post.expirationDate);
  }

  protected getFormattedExpirationDate(): string {
    const dateOptions = { month: 'short', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric' };

    let formattedDate = this._date.toLocaleDateString('en-EN', dateOptions);
    formattedDate += ' @ ';
    formattedDate += this._date.toLocaleTimeString('en-EN', timeOptions);

    return formattedDate;
  }

  protected getFormattedVotes(): string {
    const totalVotes = this._post.upVotes + this._post.downVotes;
    const voteRatio = (this._post.upVotes / totalVotes) * 100;

    return voteRatio.toFixed(0) + ' (' + totalVotes + ')';
  }

}
