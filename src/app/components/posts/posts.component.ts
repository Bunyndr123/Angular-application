import {Component, Input, OnInit} from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostsService, IData } from 'src/app/services/posts.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
    posts: IPost[] = [];

    constructor(private postsService: PostsService) {
    }

    ngOnInit(): void {
        this.postsService.allPosts().subscribe((posts: IData) => {
            this.posts = posts.data 
        }) 
    }
}