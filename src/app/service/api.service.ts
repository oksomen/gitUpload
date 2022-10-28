import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  public loginGuard = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  public url = "http://192.168.0.64:4000/routes/"

  public data : any = "";
  
  public behaviorSubject = new BehaviorSubject(this.data);
  public asObservableData = this.behaviorSubject.asObservable();


  postDataLogin(data: any) {
    this.loginGuard.next(true);
    // console.log("s:",data)
    let data1 =
    {
      "userID": data.userId,
      "userPassword": data.userPassword
    }
    return this.http.post(`${this.url}userLogin`, data1);

  }

  getUserData() {
    return this.http.get(`${this.url}getAllUsers`);
    //${_id}
  }

  getSingelUser(_id:any){
    return this.http.get(`${this.url}getUser/`+_id)
  }

  postDataForm(data2: any) {
    console.log("service36:",data2)

    let postFormData1 =
    {
      "userName": data2.userName,
      "userEmail": data2.userEmail,
      "phoneNo": data2.phoneNo,
      "userAddress": data2.userAddress
    }


    // console.log("datapost service47:", data2)
    return this.http.post(`${this.url}userRegister2`, postFormData1);
  }

  deleteData(id:any){
    // console.log("service 52:",id)
    return this.http.delete(`${this.url}deleteSingleUsers/`+id)
  }


  onEditData(data : any , id : any){
    // console.log("edit service 57:",data);
    // console.log("id:",id)
    // this.behaviorSubject.next(data);
    return this.http.put(`${this.url}updateUser/`+id,data);

  }
}
