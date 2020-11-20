import {Component, Input, OnInit} from '@angular/core';
import {BlogService} from '../../../_services/blog.service';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import {PostComment} from '../../../_models/PostComment';
import {formatDate} from '@angular/common';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-blog-detail-comments',
  templateUrl: './blog-detail-comments.component.html',
  styleUrls: ['./blog-detail-comments.component.scss']
})
export class BlogDetailCommentsComponent implements OnInit {
  @Input() postId: number;
  commentsSubscription: Subscription;
  comments: PostComment[];
  loading: boolean;
  saving: boolean = false;
  toggleAddComment: boolean = false;
  newComment: PostComment;

  constructor(private blogService: BlogService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.loading = true;
    this.newComment = {
      id: null,
      postId: this.postId,
      parent_id: null,
      user: null,
      date: null,
      content: null
    };
    this.commentsSubscription = this.blogService.commentsUpdated
      .subscribe(
        (commentsChanged: boolean) => {
          if(commentsChanged) {
            this.onGetComments(this.postId);
          }
        }
      );
    return this.onGetComments(this.postId);
  }

  onGetComments(postId: number) {
    return this.blogService.getComments(postId)
      .subscribe(
        (comments) => {
          this.comments = comments;
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

  onAddComment(form: NgForm) {
    this.toggleAddComment = false;
    this.saving = true;
    this.newComment.date = formatDate(new Date(),'yyyy-mm-dd', 'en');

    this.blogService.createComment(this.newComment)
      .subscribe(
        () => {
          this.toastr.success('Comment created', 'Success');
          this.toggleAddComment = false;
        },
        error => {
          if (error && error.error && error.error.data && error.error.data.message && error.error.data.message.error) {
            this.toastr.error('Whoops, something went wrong. Try again please.', 'Error');
          }
        }
      )
      .add(
        () => {
          this.saving = false;
        }
      );

    form.reset();
  }

}
