import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TweetService } from 'src/app/shared/tweet.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor(public service:TweetService,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
this.service.refreshList();
  }
  navigate()
  {
    this.router.navigateByUrl("postTweet");
  }
  navigate1()
  {
    this.router.navigateByUrl("gettweetByusername");
  }
}
