import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../models/post';

export interface IData {
    message: string;
    data: IPost[];
}

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    constructor(private http: HttpClient) {
    }

    allPosts(): Observable<IData> {
        return this.http.get("https://srv.petiteweb.dev/api/blog/posts") as Observable<IData>
    }
}