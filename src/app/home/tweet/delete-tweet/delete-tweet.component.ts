import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/shared/home.service';
import { Tweet } from 'src/app/shared/tweet.model';

@Component({
  selector: 'app-delete-tweet',
  templateUrl: './delete-tweet.component.html',
  styleUrls: ['./delete-tweet.component.css']
})
export class DeleteTweetComponent implements OnInit {
  status: string;
  errorMessage: any;

  constructor(public hService:HomeService,private toastr:ToastrService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  OnSubmitForm(form:NgForm)
  {//alert(form)
    this.hService.deletetweet(this.hService.tweet.id,this.hService.tweet.username)
    .subscribe(
      res=>{
  this.resetForm(form),
  this.toastr.success('Deleted successfully',' Tweets')
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