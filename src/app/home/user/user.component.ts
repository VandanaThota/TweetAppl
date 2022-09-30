import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/shared/home.service';
import { Register } from 'src/app/shared/register.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service:HomeService,
    private toastr:ToastrService) { }
     reg:Register;
    loginID:string

  ngOnInit(): void {
  }
  OnSubmitUserID()
  {//alert(form)
    this.service.getById(this.service.formData.loginID);
  }
}
