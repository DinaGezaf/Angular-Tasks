import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {  Observable } from 'rxjs';
import { IPost } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = `https://jsonplaceholder.typicode.com/posts`;
  constructor(private http :HttpClient) { }
  getPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(this.url);
  }
  getPost(id:number){
     return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}