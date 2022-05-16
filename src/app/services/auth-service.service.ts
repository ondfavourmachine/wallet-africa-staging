import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginRequirements } from '../reusables/models/authModels';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 private authUrl: string = environment.auth_login
  constructor(
    private http: HttpClient,
    ) { }

  loginUser(value: LoginRequirements): Observable<any>{
    return this.http.post(this.authUrl, value);
  }
}
