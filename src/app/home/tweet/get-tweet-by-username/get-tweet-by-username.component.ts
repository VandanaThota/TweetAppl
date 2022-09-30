import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/shared/home.service';
import { Tweet } from 'src/app/shared/tweet.model';
import { TweetService } from 'src/app/shared/tweet.service';

@Component({
  selector: 'app-get-tweet-by-username',
  templateUrl: './get-tweet-by-username.component.html',
  styleUrls: ['./get-tweet-by-username.component.css']
})
export class GetTweetByUsernameComponent implements OnInit {

  constructor(public service:TweetService,public hService:HomeService,private toastr:ToastrService) {

   }
   tweet:Tweet;
    username:string

  ngOnInit(): void {
  }
  OnSubmitForm()
  {//alert(form)
    this.hService.getByUsername(this.hService.tweet.username);
  
  }
  

}
