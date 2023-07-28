import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredentialService } from 'src/app/Service/user-credential.service';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  user:any;
  loggedIn:any;
  constructor(
    private router: Router,
    private userCredentialService: UserCredentialService,
    private authService: SocialAuthService
  ) {}

  // logInGoogle(){
  //   console.log('log in');
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);}
  ngOnInit() {
   // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      this.userCredentialService.userInfo(this.user);
      if(this.user){
        this.router.navigateByUrl('/camps');
      }      
    });    
  }
  
  renderName() {
    this.userCredentialService.userInfo('selvi');
  }

  submitLogin(user: any) {
    console.log(user);
  }
}
