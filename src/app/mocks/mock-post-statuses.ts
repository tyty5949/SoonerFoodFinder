import {PostStatus} from '../search-metadata/post-status';

export const STATUSES: PostStatus[] = [
  new PostStatus(1, 'Any'),
  new PostStatus(2, 'Active'),
  new PostStatus(3, 'Delayed'),
  new PostStatus(4, 'Canceled')
];
