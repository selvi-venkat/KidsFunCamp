import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredentialService } from 'src/app/Service/user-credential.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  userName:string;
  user:string;
  constructor(private userCredentialService: UserCredentialService,
    private authService: SocialAuthService,
    private router: Router){}
  //userName: any ;
  ngOnInit(): void {
     this.userCredentialService.userInfoEmitter.subscribe((res)=>{
            console.log(typeof(res));
      
      this.userName=res?.firstName;
      console.log(this.userName);
      
    });
     console.log(this.userName);
  
  }
  logoutUser(){
    console.log('in log outside');
    if(this.userName){
      this.authService.signOut();
      this.router.navigateByUrl('/home');
    }
    
    return;
  }
   
  
}
