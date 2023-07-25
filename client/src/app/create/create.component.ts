import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [] 

})
export class CreateComponent implements OnInit{

  employee: Employee;
Name: any;


  constructor (private employeeService: EmployeeService, private router: Router, private route:ActivatedRoute) {
      this.employee = new Employee();
  }
  
  ngOnInit(){
    this.route.params.subscribe(params =>{
      let id = params['id'];
      if(id !== undefined){
        this.employeeService.GetEmployee(id).subscribe(res =>{
          this.employee = res;
        });
        
      }
    });
    
  }

  SaveData(form: NgForm){
    if(form.valid){
      if(this.employee._id!== undefined){
        this.employeeService.UpdateEmployee(this.employee).subscribe(res =>{
          if(res.status===200){
            this.router.navigate(['/']);
          }
        });

      }else{
        this.employeeService.AddEmployee(this.employee).subscribe(res =>{
          if(res.status===201){
            this.router.navigate(['/']);
          }
        });
      }
      
    }

  }

}
