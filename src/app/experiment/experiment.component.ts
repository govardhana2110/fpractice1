import { Component, OnInit } from '@angular/core';

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
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  displayedColumns: string[] = ['position', 'name','data_type', 'catagory','last_updated', 'actions','delete'];
  dataSource = ELEMENT_DATA;



  constructor() {

   }

  ngOnInit(): void {
  }

}
