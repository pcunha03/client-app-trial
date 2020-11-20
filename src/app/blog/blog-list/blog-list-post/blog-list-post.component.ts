import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-list-post',
  templateUrl: './blog-list-post.component.html',
  styleUrls: ['./blog-list-post.component.scss']
})
export class BlogListPostComponent {
  @Input() postId: number;
  @Input() postTitle: string;
  @Input() postAuthor: string;
  @Input() postPublishDate: string;
  @Input() postDescription: string;

}
