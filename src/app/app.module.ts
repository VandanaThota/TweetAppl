import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from'@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { TweetComponent } from './home/tweet/tweet.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { UserComponent } from './home/user/user.component';
import { AllusersComponent } from './home/user/allusers/allusers.component';
import { ForgotpasswordComponent } from './home/user/forgotpassword/forgotpassword.component';
import { LoginComponent } from './home/user/login/login.component';


import { HomeService } from 'src/app/shared/home.service';
import {TweetService} from 'src/app/shared/tweet.service';
import { AddTweetComponent } from './home/tweet/add-tweet/add-tweet.component';
import { UpdateTweetComponent } from './home/tweet/update-tweet/update-tweet.component';
import { DeleteTweetComponent } from './home/tweet/delete-tweet/delete-tweet.component';
import { GetTweetByUsernameComponent } from './home/tweet/get-tweet-by-username/get-tweet-by-username.component';
import { ReplyTweetComponent } from './home/tweet/reply-tweet/reply-tweet.component';
import { LikeTweetComponent } from './home/tweet/like-tweet/like-tweet.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    TweetComponent,
    DemoComponent,
    UserComponent,
    AllusersComponent,
    ForgotpasswordComponent,
    LoginComponent,
    AddTweetComponent,
    UpdateTweetComponent,
    DeleteTweetComponent,
    GetTweetByUsernameComponent,
    ReplyTweetComponent,
    LikeTweetComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  providers: [
HomeService,
TweetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
