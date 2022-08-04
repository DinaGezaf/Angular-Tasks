import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  pageTitle : string ='Post Detail : ';
  errorMessage:string=''
  post :any
  constructor(private route : ActivatedRoute,
              private postService:PostService,
              private router :Router) { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle +=`${id}`;
    this.postService.getPost(id).subscribe({
        next: post => this.post = post,
        error: err => this.errorMessage=err
    })
  }
  onBack():void{
    this.router.navigate(['/posts'])
  }
}
