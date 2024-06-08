import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent implements OnInit {
  RegisterDataForm!: FormGroup;
  constructor(private formBuilder : FormBuilder , private userService : UserService){}
  ngOnInit(): void {
    this.RegisterDataForm=this.formBuilder.group({
      fisrtName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
      
  }
  

  OnRegister(){
    let reqData={
      fisrtName:this.RegisterDataForm.value.fisrtName,
      lastName:this.RegisterDataForm.value.lastName,
      email:this.RegisterDataForm.value.email,
      password:this.RegisterDataForm.value.password
    } 
    this.userService.registration(reqData).subscribe((response:any)=>{
      console.log("Registration Successfull")
      console.log(response);
    })
  

  }
}
