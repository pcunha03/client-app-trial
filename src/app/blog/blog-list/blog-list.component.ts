import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BlogService} from '../../_services/blog.service';
import {Post} from '../../_models/Post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  posts: Post[];
  loading: boolean;

  constructor(private blogService: BlogService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.loading = true;
    return this.onGetPosts();
  }

  onGetPosts() {
    return this.blogService.getPosts()
      .subscribe(
        (posts) => {
          this.posts = posts.sort((a: Post, b: Post) =>
            new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
          );
        },
        error => {
            this.toastr.error('Whoops, something went wrong. Try again please.', 'Error');
        }
      )
      .add(
        () => {
          this.loading = false;
        }
      );
  }

}
