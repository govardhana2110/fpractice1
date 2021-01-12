import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';


interface Food {
  value: string;
  viewValue: string;

}

export interface PeriodicElement {
  name: string;
  position: number;
  catagory: string;
  actions: string;
  delete,
  data_type,
  last_updated,

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'incident', catagory: 'incident', actions: 'H',delete:'',data_type:'integer',last_updated:'06-01-2021'},
  {position: 2, name: 'insurence', catagory: 'person', actions: 'He',delete:'',data_type:'date',last_updated:'06-01-2021'},
  {position: 3, name: 'covered', catagory: 'incident', actions: 'Li',delete:'',data_type:'string',last_updated:'06-01-2021'},
  {position: 4, name: 'expired', catagory: 'property', actions: 'Be',delete:'',data_type:'string',last_updated:'06-01-2021'},
  {position: 5, name: 'done', catagory: 'individual', actions: 'B',delete:'',data_type:'date',last_updated:'06-01-2021'},

];


@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})



export class Task1Component implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  displayedColumns: string[] = ['position', 'name','data_type', 'catagory','last_updated', 'actions','delete'];
  dataSource = ELEMENT_DATA;
  flag:boolean=true;
  flag1:boolean=false;
  constructor() {

   }

  ngOnInit(): void {
  }

  table1(){
    this.flag=true;
    this.flag1=true;
  }

}
