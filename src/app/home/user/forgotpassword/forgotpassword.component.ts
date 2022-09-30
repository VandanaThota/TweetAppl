import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/shared/home.service';
import { Register } from 'src/app/shared/register.model';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(public service:HomeService,
    private toastr:ToastrService) { }
     reg:Register;
    username:string

  ngOnInit(): void {
   
  }

  OnSubmitUserName()
  {
    this.OnForgotPW;
  }

OnForgotPW(form:NgForm)
{
  this.service.forgotpassword(this.service.formData.loginID,this.service.formData).subscribe(
    res=>{
this.resetForm(form),
this.toastr.success('Password Changed successfully','User Register')
  },
  err=>
  {
    console.log(err);
  });

}
OnSubmit(form:NgForm){
  this.service.postUserDetails().subscribe(
    res=>{
this.resetForm(form),
this.toastr.success('Password Changed successfully','User Register')
  },
  err=>
  {
    console.log(err);
  });
}
resetForm(form:NgForm)
{
  form.form.reset();
  this.service.formData=new Register();
}
  

}
