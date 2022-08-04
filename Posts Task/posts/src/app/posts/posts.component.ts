
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPost } from './post';
import { PostService } from './post.service';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[PostService]
})
export class PostsComponent implements OnInit {
  pageTitle:string ='Post List : ';
  posts :IPost[]=[]
  sub!: Subscription;
  errorMessage:string=''
  constructor(private postService : PostService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.sub=this.postService.getPosts().subscribe(
      {
        next: posts => this.posts = posts,
        error: err => this.errorMessage=err
    })
    this.posts=this.route.snapshot.data['posts']
  }
  
}

