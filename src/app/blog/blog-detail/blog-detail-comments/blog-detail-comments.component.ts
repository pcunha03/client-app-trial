import {Component, Input, OnInit} from '@angular/core';
import {BlogService} from '../../../_services/blog.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-blog-detail-comments',
  templateUrl: './blog-detail-comments.component.html',
  styleUrls: ['./blog-detail-comments.component.scss']
})
export class BlogDetailCommentsComponent implements OnInit {
  @Input() postId: number;
  comments: Comment[];
  loading: boolean;

  constructor(private blogService: BlogService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.loading = true;
    return this.onGetComments(this.postId);
  }

  onGetComments(postId: number) {
    return this.blogService.getComments(postId)
      .subscribe(
        (comments) => {
          console.log(comments);
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


}
