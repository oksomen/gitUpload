import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
isSubscribedToEmailsMessage: any;


  public showPass : boolean = false;

  // public userId = '';
  // public userPassword = '';

  public data : any;

  public userForm1 : any;
  public submitted = false;


  constructor(private api : ApiService ,
    private fromBuilder : FormBuilder,
    private router : Router) { }
 
  ngOnInit(): void {
 this.userForm1 = this.fromBuilder.group({
  userId:['',Validators.required],
  userPassword : ['',Validators.required]
 })
  }

  showHidePass(pass:any){
    this.showPass = pass.target.checked
  }

  public ok :any;
  isLogin(){
    let data1 = this.userForm1.value
    // console.log(data1);
    
    this.api.postDataLogin(data1).subscribe((res:any)=>{
     
      if(res.successStatus ){
        // console.log(res.successStatus)
        // sessionStorage.setItem("userId",res._id);
        alert('sign in complete');
        this.router.navigate(['/dashboard/dash']);
      }else{
        alert(res.message);
        // this.ok = res.message
      }

    })
  }


}


 // console.log(res);
      // JSON.stringify(this.userForm1.value)
      // console.log(res);
      // console.log(this.userForm1.value)