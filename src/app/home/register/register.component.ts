import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/shared/home.service';
import { Register } from 'src/app/shared/register.model';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:HomeService,
    private toastr:ToastrService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
OnSubmit(form:NgForm){
  this.service.postUserDetails().subscribe(
    res=>{
this.resetForm(form),
this.toastr.success('User Details Added successfully','User Register')
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
