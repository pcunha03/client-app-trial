import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BlogService} from '../../_services/blog.service';
import {Post} from '../../_models/Post';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  postId: number;
  post: Post;
  postLoading: boolean;

  constructor(private route: ActivatedRoute,
              private blogService: BlogService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.postLoading = true;
    this.route.params
      .subscribe(
        (params: Params) => {
          this.postId = +params.id;
        }
      );
    return this.onGetPost(this.postId);
  }

  // Get blog post
  onGetPost(id: number) {
    this.blogService.getPost(id)
      .subscribe(
        (post) => {
          this.post = post;
        },
        error => {
          if (error && error.error && error.error.data && error.error.data.message && error.error.data.message.error) {
            this.toastr.error('Whoops, something went wrong. Try again please.', 'Error');
          }
        }
      )
      .add(
        () => {
          this.postLoading = false;
        }
      );
  }

}
