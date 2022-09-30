import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { AddTweetComponent } from './home/tweet/add-tweet/add-tweet.component';
import { DeleteTweetComponent } from './home/tweet/delete-tweet/delete-tweet.component';
import { GetTweetByUsernameComponent } from './home/tweet/get-tweet-by-username/get-tweet-by-username.component';
import { LikeTweetComponent } from './home/tweet/like-tweet/like-tweet.component';
import { ReplyTweetComponent } from './home/tweet/reply-tweet/reply-tweet.component';
import { TweetComponent } from './home/tweet/tweet.component';
import { UpdateTweetComponent } from './home/tweet/update-tweet/update-tweet.component';
import { AllusersComponent } from './home/user/allusers/allusers.component';
import { ForgotpasswordComponent } from './home/user/forgotpassword/forgotpassword.component';
import { LoginComponent } from './home/user/login/login.component';
import { UserComponent } from './home/user/user.component';

const routes: Routes = 
[
  
   {path:'',redirectTo:'/home',pathMatch:'full'},

  {path:'home',
    component:HomeComponent},

    {path:'allUsers',
    component:AllusersComponent,
    pathMatch:'full'},

    {path:'forgotpw',
    component:ForgotpasswordComponent},

     {path:'register',
        component: RegisterComponent},
        {path:'getusername',
        component: UserComponent},
        {path:'login',
        component: LoginComponent},
        {path:'alltweets',
        component: TweetComponent},
        {path:'postTweet',
        component: AddTweetComponent},
        {path:'gettweetByusername',
        component: GetTweetByUsernameComponent},
        {path:'deletetweet',
        component: DeleteTweetComponent},
        {path:'updatetweet',
        component: UpdateTweetComponent},
        {path:'liketweet',
        component: LikeTweetComponent},
        {path:'replytweet',
        component: ReplyTweetComponent}

    
  ];

    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
