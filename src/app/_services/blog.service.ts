import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../_models/post';
import { Comment } from '../_models/comment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

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
    return this.httpClient.get<any>('posts/' + id + '/comments')
      .pipe(
        map(
          (comments) => {
            return comments;
          }
        )
      );
  }

}
