import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public userForm : any;
  public dataAdd : any;


  constructor(
    private formBuilder:FormBuilder,
    private api : ApiService,
    private route : Router
  ) {

    
   }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName : ['', Validators.required,],
      phoneNo :['', Validators.required],
      userEmail :['', Validators.required],
      userAddress : ['',Validators.required]
    })
    // console.log("form Data:",this.userForm);
  }

  sendData(){  
    // console.log( "email:",this.userForm.value.userEmail);
    if(this.userForm.valid) {
      let postFormData = {
        "userName": this.userForm.value.userName,
            "userEmail": this.userForm.value.userEmail,
            "phoneNo": this.userForm.value.phoneNo,
            "userAddress": this.userForm.value.userAddress
      }
      // console.log("if contion:",postFormData)
      this.api.postDataForm(postFormData).subscribe(x=>{
        // console.log(x);
        this.dataAdd = x;
        alert("User Add Succesfully");
        // console.log(this.dataAdd);
        this.userForm.reset();
        this.userForm.get('userName').clearValidators();
        this.userForm.get('userName').updateValueAndValidity();

        this.userForm.get('userEmail').clearValidators();
        this.userForm.get('userEmail').updateValueAndValidity();

        this.userForm.get('phoneNo').clearValidators();
        this.userForm.get('phoneNo').updateValueAndValidity();

        this.userForm.get('userAddress').clearValidators();
        this.userForm.get('userAddress').updateValueAndValidity();

        this.route.navigate(['dashboard/user'])
      })
    }

  }
 
  
}




























