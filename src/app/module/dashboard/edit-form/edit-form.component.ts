import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  public _id : any;
  public editForm: any;
  public updateDataId: any;
  public getData : any;
  public getData2 : any;
  public getData3 : any;


  constructor(
    private api: ApiService,private router: Router,
    private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder,
  ) {
    
    this.updateDataId = this.activatedRoute.snapshot.paramMap.get('_id');
    // console.log("Update Data:",typeof(this.updateDataId));

    this.api.getUserData().subscribe((res:any)=>{
      
    this.getData = res;
    
        
    this.getData.AllUsers.map((items:any)=>{
    
      if(items._id == this.updateDataId){
        this.getData2 = items;

        // this.getData3 = items;
        // this.getData3 = items.userName
      }

    })
     console.log(this.getData2);

    })
    // this.setValue();
    console.log(this.getData2);

  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      userName: ['', Validators.required,],
      phoneNo: ['', Validators.required],
      userEmail: ['', Validators.required],
      userAddress: ['', Validators.required],
    })
    
   if(this.getData2){
    this.editForm['userName'].setValue(this.getData2.userName);
    this.editForm['phoneNo'].setValue(this.getData2.phoneNo);
    this.editForm['userEmail'].setValue(this.getData2.userEmail);
    this.editForm['userAddress'].setValue(this.getData2.userAddress);

   }
  }
  
  setValue(){
    this.editForm.setValue({
    })
  }

  

  update() {
    
        // console.log("update 48:", this.editForm);
    this.api.onEditData(this.editForm.value,this.updateDataId)
    .subscribe((res)=>{
      // console.log(res);
      window.alert("Finally Update complete")
      this.router.navigate(['/dashboard/user'])
    })
  }

}
