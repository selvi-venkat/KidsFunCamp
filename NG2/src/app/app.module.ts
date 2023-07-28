import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './Component/signup-form/signup-form.component';
import { LoginFormComponent } from './Component/login-form/login-form.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponentComponent } from './common/page-not-found-component/page-not-found-component.component';
import { HttpClientModule } from '@angular/common/http';
import {
  SocialLoginModule,
} from '@abacritt/angularx-social-login';

import { UserCredentialService } from './Service/user-credential.service';
import { LoginFormModule } from './Component/login-form/login-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupFormComponent,
    LoginFormComponent,
    FooterComponent,
    PageNotFoundComponentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    LoginFormModule
  ],
  providers: [ UserCredentialService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private userCredentialService: UserCredentialService){}
}
