import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCredentialService {
  @Output()
  userInfoEmitter = new EventEmitter<any>();
  userInfo(data){
    console.log(data);
    this.userInfoEmitter.emit(data);
  }

  constructor() { }
}
