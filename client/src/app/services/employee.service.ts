import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { environment as env } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  headers: HttpHeaders;
  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({ 'content-type': 'application/json' });
   }

  GetEmployees():Observable<Employee[]> {
    return this.client.get<Employee[]>(env.apiAddress+'/employee');
  }

  GetEmployee(id: string):Observable<Employee> {
    return this.client.get<Employee>(env.apiAddress+'/employee/'+id);
  }

  AddEmployee(employee: Employee): Observable<HttpResponse<any>>{
    return this.client.post<HttpResponse<any>>(env.apiAddress + '/employee/', JSON.stringify(employee),
    {headers: this.headers, observe: 'response'});
  }

  UpdateEmployee(employee: Employee): Observable<HttpResponse<any>>{
    return this.client.put(env.apiAddress + '/employee/'+employee._id, JSON.stringify(employee),
    {headers: this.headers, observe: 'response'});
  }

  DeleteEmployee(id: string):Observable<HttpResponse<any>> {
    return this.client.delete<HttpResponse<any>>(env.apiAddress+'/employee/'+id,{observe: 'response'});
  }
}
