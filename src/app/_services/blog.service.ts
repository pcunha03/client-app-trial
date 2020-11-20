import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../_models/post';
import { PostComment } from '../_models/PostComment';
import {Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  commentsUpdated = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  // Get all posts
  getPosts() {
    return this.httpClient.get<[Post]>('posts')
      .pipe(
        map(
          (posts) => {
            return posts;
          }
        )
      );
  }

  // Get post details
  getPost(id: number) {
    return this.httpClient.get<Post>('posts/' + id)
      .pipe(
        map(
          (post: Post) => {
            return post;
          }
        )
      );
  }

  // Get post comments
  getComments(id: number) {
    return this.httpClient.get<[PostComment]>('posts/' + id + '/comments')
      .pipe(
        map(
          (comments) => {
            return comments;
          }
        )
      );
  }

  // Create a comment
  createComment(comment: PostComment) {
    return this.httpClient.post('posts/' + comment.postId + '/comments', comment)
      .pipe(
        map(
          (resp: any) => {
            this.commentsUpdated.next(true);
          }
        )
      )
  }

}
