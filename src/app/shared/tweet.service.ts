import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Tweet } from './tweet.model';
import { ReplyTweet } from './reply-tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http:HttpClient) {
   
   }
   tweet:Tweet=new Tweet();
   list:Tweet[];
   tweetReply: ReplyTweet=new ReplyTweet();
   username:string;
   formData:Tweet=new Tweet();

   readonly baseURL="https://localhost:44363/api/v1.0/tweets/"
   refreshList(){
    this.http.get(this.baseURL+"all")
    .toPromise()
    .then(res=>this.list=res as Tweet[])
  }
  postTweet(username:string)
  {
    return this.http.post(this.baseURL+username+"/add",this.tweet)    
  }
  // getByUsername(username:string)
  // {
  //   return this.http.get(this.baseURL+username)
  //   .toPromise()
  //   .then(res=>this.tweet=res as Tweet) ;
  // }

}
