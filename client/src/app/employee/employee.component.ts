import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []

})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];

  constructor (private employeeService: EmployeeService){}

  ngOnInit(){
    this.employeeService.GetEmployees().subscribe(res => {
      this.employees = res;
    })
  }
  deleteEmployee(id: string){
    if(confirm("Are you sure to delete?")){
      this.employeeService.DeleteEmployee(id).subscribe(res =>{
          if(res.status === 200){
            for (let i = 0; i < this.employees.length; i++) {
              if(id===this.employees[i]._id){
                this.employees.splice(i,1);
                break;
              }
              
            }
          }
      });
    }
  }

}
