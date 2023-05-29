import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
      
  }
registerForm=new FormGroup({
  firstname: new FormControl(""),
  lastname: new FormControl(""),
  email: new FormControl(""),
  phone: new FormControl(""),
  
});
registerSubmited(){
  console.log(this.registerForm);
}
}
