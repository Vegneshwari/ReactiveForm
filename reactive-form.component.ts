import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidation } from './custom-validation';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  title: string= "Jehovah-Reactive form"

  UserDetails: FormGroup | any;


  ngOnInit(){
    /* this.UserDetails=new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      ID: new FormControl(""),
      address: new FormGroup({   //formgroup inside of a formgroup, don't bind it....instead just use as formGroupName like formControlName
          street: new FormControl(""),
          houseNo: new FormControl(""),
          city: new FormControl("")
        })
    }); */


/* 
for avoid creating "new" instance at formgroup and formcontrol, we can just create a constructor and create an instance of class. 
    So, it enables us to use the instance throughout the component without using new keyword */ 
    
    this.UserDetails= this.fb.group({
      name: ["",[Validators.required,Validators.minLength(3)]],
      ID: ["",Validators.required],
      phone: ["", [Validators.required,CustomValidation.phoneNumber]],
      emailID: ["",[Validators.required,CustomValidation.email]], 
      address: this.fb.group({
        street: ["",Validators.required],
        houseNo: ["",Validators.required],
        city: ["",Validators.required],
        password: ["", [Validators.required,CustomValidation.createPassword]],  
        confirmPassword: ["", [Validators.required,CustomValidation.matchPassword]]
      })
    })
  }
  
  constructor(private fb:FormBuilder){

  }

  onSubmit(){

    console.log(this.UserDetails.value);
    
  }


}
