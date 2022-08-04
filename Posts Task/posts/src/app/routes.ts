import { Routes } from "@angular/router";
import { PostDetailComponent } from "./posts/post-details/post-detail.component";
import { PostsComponent } from "./posts/posts.component";



export const appRoutes:Routes=[
    {path:'posts',component:PostsComponent},
    {path:'posts/:id',component:PostDetailComponent},
    {path:'',redirectTo:'posts',pathMatch:'full'},
    {path:'**',redirectTo:'posts',pathMatch:'full'}

]