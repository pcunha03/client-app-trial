import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListPostComponent } from './blog-list-post.component';

describe('BlogListPostComponent', () => {
  let component: BlogListPostComponent;
  let fixture: ComponentFixture<BlogListPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
