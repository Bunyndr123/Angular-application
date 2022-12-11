import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/users';

@Injectable({
    providedIn: 'root',
})
export class UserAuthService {
    constructor(private http: HttpClient) {
    }

    authUser(login: string, password: string): Observable<IUser> {
        return this.http.post("https://ithub-blog.herokuapp.com/api/users/auth", {
            login: login,
            password: password
        },
        {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:4200',
                'Access-Control-Allow-Credentials': 'true',
            }
        }) as Observable<IUser>;
    }
}