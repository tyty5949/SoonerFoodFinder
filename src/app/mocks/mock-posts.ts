import {Post} from '../post/post';

export const MOCK_POSTS_ACTIVE: Post[] = [
  new Post(1, 1, 'First Example Post', 'Come to my example club. This is an event with free food!',
    './assets/mock_img/posts/A84NH783GH.jpg', '2018-09-10 20:00:00', 2, 2, 4, 2, 23,
    4, 1, 1, true),
  new Post(3, 2, 'Second Example Post - Edited', 'Y\'all should cme to the south oval for free food!',
    './assets/mock_img/posts/default1.jpg', '2018-09-07 19:40:55', 1, 2, 2, 2, 2,
    0, 2, 3, true)
];
