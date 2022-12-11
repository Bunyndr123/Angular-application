import { Component } from '@angular/core';

import {IPost} from './models/post';
import {posts} from './data/posts';
import { IUser } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular post app🌆';
  posts: IPost[] = posts; 

  isLogin: boolean = false;
  user: IUser;
}
