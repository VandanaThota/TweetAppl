import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/shared/home.service';
import { Tweet } from 'src/app/shared/tweet.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(public hService:HomeService,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    
    this.hService.login(this.hService.formData.loginID,this.hService.formData.password);
  }
  OnSubmit(form:NgForm)
  {// this.hService.login(this.hService.formData.loginID,this.hService.formData.password);
    this.hService.login(this.hService.formData.loginID,this.hService.formData.password)
    
  //.subscribe(
  //     res=>{
  // this.resetForm(form),
  // this.toastr.success('User Details Added successfully','User Register')
  //   },
  //   err=>
  //   {
  //     console.log(err);
  //   });
  }
  navigate()
  {
    this.router.navigateByUrl("postTweet");
  }
  navigate1()
  {
    this.router.navigateByUrl("gettweetByusername");
  }
  navigate2()
  {
    this.router.navigateByUrl("deletetweet");
  }
  navigate3()
  {
    this.router.navigateByUrl("updatetweet");
  }
 
  navigate4()
  {
    this.router.navigateByUrl("liketweet");
  }
  navigate5()
  {
    this.router.navigateByUrl("replytweet");
  }
}


