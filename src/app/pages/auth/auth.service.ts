import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { User, UserResponse } from 'src/app/shared/models/user.interface';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkToken();
  }

  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData: User): Observable<UserResponse | void> {
    return this.http.post<UserResponse>(
      `${environment.API_URL}/auth/login`,
      authData
    ).pipe(
      map((res:UserResponse) => {
        this.saveToken(res.token);
        this.loggedIn.next(true);
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }
  private checkToken(): void {
    // const isExpired = helper.isTokenExpired(userToken);
    let isExpired = true;
    const userToken = localStorage.getItem('token');
    if((userToken && helper.isTokenExpired(userToken)) || !localStorage.getItem('token')){
      isExpired = true;
    }
    isExpired = false;

    if (isExpired){
      this.logout();
    } else {
      this.loggedIn.next(true);
    }
  }

  private saveToken(token:string): void {
    localStorage.setItem('token', token);
  }

  private handlerError(err: { message: any; }): Observable<never> {
    let errorMessage = 'Ha ocurrido un error recibiendo los datos.';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
