import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/shared/home.service';
import { Tweet } from 'src/app/shared/tweet.model';
import { TweetService } from 'src/app/shared/tweet.service';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css']
})
export class AddTweetComponent implements OnInit {

  constructor(public service:HomeService,private toastr:ToastrService,private form:FormBuilder) { }

  ngOnInit(): void {
  }


OnAddTweet(form:NgForm)
{
  this.service.postTweet(this.service.tweet.username)
  .subscribe(
    res=>{
this.resetForm(form),
this.toastr.success('Tweets Added successfully','Tweets')
  },
  err=>
  {
    console.log(err);
  });
}
resetForm(form:NgForm)
{
  form.form.reset();
  this.service.tweet=new Tweet();
};

}


