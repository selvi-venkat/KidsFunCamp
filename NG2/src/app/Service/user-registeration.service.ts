import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userRegModel } from '../Model/userRegister.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserRegisterationService {
  constructor(private http: HttpClient) {}

  URL = 'https://kidzcamp-99601-default-rtdb.firebaseio.com/userReg.json';
  registerUserSubmit(userDetails: userRegModel) {
    const headers = new HttpHeaders({ kidscamp: 'enroll' });
    this.http
      .post(`${this.URL}`, userDetails, { headers })
      .subscribe((response) => response);
  }
  fetchUserDetails() {
    this.http
      .get(this.URL)
      .pipe(
        map((resp, i) => {
          const userList = [];
          for (let key in resp) {
            userList.push({ ...resp[key], id: key });
          }
          return userList;
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
