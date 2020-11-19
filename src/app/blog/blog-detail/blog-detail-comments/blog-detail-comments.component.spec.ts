import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailCommentsComponent } from './blog-detail-comments.component';

describe('BlogDetailCommentsComponent', () => {
  let component: BlogDetailCommentsComponent;
  let fixture: ComponentFixture<BlogDetailCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetailCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
