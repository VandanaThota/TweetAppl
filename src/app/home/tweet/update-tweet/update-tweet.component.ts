import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/shared/home.service';
import { Tweet } from 'src/app/shared/tweet.model';

@Component({
  selector: 'app-update-tweet',
  templateUrl: './update-tweet.component.html',
  styleUrls: ['./update-tweet.component.css']
})
export class UpdateTweetComponent implements OnInit {

  constructor(public hService:HomeService,private toastr:ToastrService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  OnSubmitForm(form:NgForm)
  {
    this.hService.updatetweet(this.hService.tweet.username,this.hService.tweet.id).subscribe(
      res=>{
  this.resetForm(form),
  this.toastr.success('Updated successfully',' Tweets')
    },
    err=>
    {
      console.log(err);
    });
  }
  resetForm(form:NgForm)
  {
    form.form.reset();
    this.hService.tweet=new Tweet();
  }}

