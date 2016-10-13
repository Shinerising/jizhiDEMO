import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Content } from './content';

@Component({
  selector: 'blog',
  templateUrl:'./src/blog.component.html',
  styleUrls: ['./src/blog.component.css']
})
export class BlogComponent implements OnInit {

  content: Content;
  constructor(private postService: PostService) {
  }
  
  ngOnInit(): void {
     this.postService.getContent('./src/data.json', null, null)
    .then(content => {
      this.content=content;
    }, error => { });
  }
}
