import { Injectable } from '@angular/core';
import { Register } from './register.model';
import{HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Tweet } from './tweet.model';
import { ReplyTweet } from './reply-tweet.model';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  form:FormGroup;
  //username:string;

  constructor(private http:HttpClient) { }
  formData:Register=new Register();
  reg:Register=new Register();
  list:Register[];
  tweetlist:Tweet[];
  loginId:any;
  password:string;
  tweet:Tweet=new Tweet();
  getTweet:Tweet=new Tweet();
  reply:ReplyTweet=new ReplyTweet();
  
  readonly baseURL1="https://localhost:44363/api/v1.0/tweet/"
  readonly baseURL="https://localhost:44363/api/v1.0/tweet/register"
  readonly baseURL2="https://localhost:44363/api/v1.0/tweet/users/all"
  readonly baseURL3="https://localhost:44363/api/v1.0/tweet/{username}/forgot"
  //readonly baseURL4="https://localhost:44363/api/v1.0/tweets/"
  postUserDetails(){
    return this.http.post(this.baseURL,this.formData)
  }
  refreshList(){
    this.http.get(this.baseURL2)
    .toPromise()
    .then(res=>this.list=res as Register[])
  }
  getById(username:string){
    return this.http.get(this.baseURL1+"user/search/"+username)
    .toPromise()
    .then((res=>this.reg=res as Register))
  }
  forgotpassword(username:string,formData:Register)
  {
    
return this.http.put(this.baseURL1+ username+"/forgot",this.formData)
  }
  getByUsername(username:string)
  {
     this.http.get(this.baseURL1+username)
    .toPromise()
    .then(res=>this.tweetlist=res as Tweet[]) ;
  }
  deletetweet(tweetid:string,username:string)
  {
return this.http.delete(this.baseURL1+username+"/delete/"+tweetid);
  }
updatetweet(username:string,id:string)
{
  return this.http.put(this.baseURL1+username+"/update/"+id,this.tweet);
  
}
liketweet(username:string,id:string)
{
  return this.http.put(this.baseURL1+username+"/like/"+id,this.tweet);
  
}
replytweet(username:string,id:string)
{
  return this.http.post(this.baseURL1+username+"/reply/"+id,this.reply);
  
}
refreshTweetList(){
  this.http.get(this.baseURL1+"all")
  .toPromise()
  .then(res=>this.tweetlist=res as Tweet[])
}
login(loginId:string, password:string) {
  return this.http.get(this.baseURL1+ "login?LoginID="+loginId+"&password="+[password])
  .toPromise()
  .then(res=>this.tweetlist=res as Tweet[]);
    
}
postTweet(username:string)
  {
    return this.http.post(this.baseURL1+username+"/add",this.tweet)    
  }
}


