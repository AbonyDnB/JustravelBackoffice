import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    const userData = {
      username: 'jordi.avila@justravel.es',
      password: '1234',
    }
    this.authSvc.login(userData).subscribe((res) => console.log('Login'));
  }

}
