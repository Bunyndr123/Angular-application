import {Component, Input} from '@angular/core';
import { IPost } from 'src/app/models/post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html'
})
export class PostComponent {
    @Input() post: IPost;

    comments = false
}