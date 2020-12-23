import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmpservicesService {
  url:string = 'http://localhost:3000/employee/';
  constructor( private _http:HttpClient) { }

  getallDetails(){
    return this._http.get<employee[]>(this.url);
  }
  getDetails(id){
    return this._http.get<employee[]>(this.url+id);
  }
  addDetails(item:employee){
    let body=JSON.stringify(item);
    console.log(body);
    return this._http.post(this.url,body);
  }
  updateDetails(item:employee) {
      let head = new HttpHeaders().set('Content-Type', 'application/json');
      let body = JSON.stringify(item);
     return this._http.put(this.url + item.id, body, { headers: head });
     }
  deleteDetails(Id){
      let head=new HttpHeaders().set('Content-Type','application/json');
      return this._http.delete(this.url+Id,{headers:head});
    }
}
