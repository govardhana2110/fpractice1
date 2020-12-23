import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from './employee';
import { EmpservicesService } from './empservices.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp_arr:employee[]=[];

  constructor( private _data:EmpservicesService,
    private _router:Router,
    private _acroutes:ActivatedRoute) { }

  ngOnInit(): void {
   this._data.getallDetails().subscribe((data)=>{
      this.emp_arr=data
     });

  }

}
