import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
  forgotDataForm!: FormGroup;
  constructor(private formBuilder : FormBuilder , private userService : UserService){}
  ngOnInit(): void {
    this.forgotDataForm=this.formBuilder.group({
       Email:['',[Validators.email,Validators.required]],
       
    })
  }

  OnForgot(){
    //this.submitted=true;
    if(this.forgotDataForm.valid){
      let reqData={
        Email:this.forgotDataForm.value.Email,
        
      }
      this.userService.forgot(reqData).subscribe((response:any)=>{
        console.log(response);
       // localStorage.setItem("token",response.data);
        
      })
    }
  }
  
  }