import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-list-post',
  templateUrl: './blog-list-post.component.html',
  styleUrls: ['./blog-list-post.component.scss']
})
export class BlogListPostComponent implements OnInit {
  @Input() postId: number;
  @Input() postTitle: string;
  @Input() postAuthor: string;
  @Input() postDate: string;
  @Input() postDescription: string;

  constructor() { }

  ngOnInit() {
  }

}
