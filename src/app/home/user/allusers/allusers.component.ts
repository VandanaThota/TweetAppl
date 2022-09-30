import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/home.service';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
//import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  allusers:any;
  constructor(public service:HomeService,private formbuilder:FormBuilder){


   }
   

   
  ngOnInit(): void {
    this.service.refreshList();
  }

}
