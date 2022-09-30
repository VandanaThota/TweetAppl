import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/shared/home.service';
import { ReplyTweet } from 'src/app/shared/reply-tweet.model';

@Component({
  selector: 'app-reply-tweet',
  templateUrl: './reply-tweet.component.html',
  styleUrls: ['./reply-tweet.component.css']
})
export class ReplyTweetComponent implements OnInit {

  constructor(public service:HomeService,private toastr:ToastrService,private form:FormBuilder) { }


  ngOnInit(): void {
  }
  OnReplyTweet(form:NgForm)
  {
    this.service.replytweet(this.service.reply.username,this.service.reply.tweetId)
    .subscribe(
      res=>{
  this.resetForm(form),
  this.toastr.success('Replied tweet successfully',' Reply')
    },
    err=>
    {
      console.log(err);
    });
 
  }
  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.reply=new ReplyTweet();
  }}