import {Component, Input} from '@angular/core';
import { UserAuthService } from 'src/app/services/userAuth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    login = ""
    password = ""

    constructor(private auth: UserAuthService) {
    }

    authSubmit() {
        alert("Please")
        this.auth.authUser(this.login, this.password).subscribe(user => {
            console.log(user);
        })
    }

}