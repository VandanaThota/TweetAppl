import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { HomeService } from '../shared/home.service';
import { Register } from '../shared/register.model';
import { Tweet } from '../shared/tweet.model';
import { TweetService } from '../shared/tweet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginID: string;
  Password: string;
  
  
  constructor(private router:Router,public hService:HomeService,private toastr:ToastrService,public tService:TweetService) { 
  //   this.router.routeReuseStrategy.shouldReuseRoute = function(){
  //     return false;
  //  }

  //  this.router.events.subscribe((evt) => {
  //     if (evt instanceof NavigationEnd) {
  //        // trick the Router into believing it's last link wasn't previously loaded
  //        this.router.navigated = false;
  //        // if you need to scroll back to top, here is the right place
  //        window.scrollTo(0, 0);
  //     }
  // });

  }

  ngOnInit(): void {
    
  }
  navigate(){
    this.router.navigateByUrl('register');
 
  }
  navigate2(){
    this.router.navigateByUrl('allUsers');
  }
  navigate3(){
    this.router.navigateByUrl('getusername');
  }
  navigate4(){
    this.router.navigateByUrl('forgotpw');
  }
  OnSubmit(form:NgForm)
  {
    
    this.router.navigateByUrl("login");
   
  }
  resetForm(form:NgForm)
  {
    form.form.reset();
    this.hService.formData=new Register();
  
}

}



