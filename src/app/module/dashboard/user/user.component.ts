import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


// export interface PeriodicElement {
//   name: string,
//   position: number,
//   phone: number,
//   email : any,
//   address : any
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', email:'',address:'', phone: 0,},
//   {position: 2, name: 'Helium',email:'',address:'', phone: 0,},
//   {position: 3, name: 'Lithium',email:'', address:'',phone: 0,},
//   {position: 4, name: 'Beryllium',email:'',address:'',phone: 0,},
//   {position: 5, name: 'Boron',email:'',address:'',phone: 0,},
// ];

// for 2nd table

export interface UserData {
  name: string;
  position: any,
  phone: number,
  email: any,
  address: any


  // id: string;
  // name: string;
  // progress: string;
  // fruit: string;
}

const EMAIL: string[] = [
  'somen@gmail.com',
  'lol@hotmail.com'

];
const NAMES: string[] = [
  'somen',
  'som'
];

const PHONE: number[] = [
  702964271,
  9046953095,
]

const ADDRESS: any = []

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //   displayedColumns: string[] = ['position', 'name', 'email',
  //   'phone', 'address', 'actions'];
  //  dataSource = ELEMENT_DATA;


  displayedColumns: any = ['position', 'name', 'phone', 'email', 'address'];
  dataSource: MatTableDataSource<UserData> | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;





  public listData: any;
  public data: any;

  public _id: any;
  public editForm: any;

  constructor(private api: ApiService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  ngOnInit(): void {
    this.getData()

  }

  deleteData() { }

  editData() { }


  onDelete(id: any) {
    let result = confirm("are you sure");
    if (result) {
      this.api.deleteData(id).subscribe((res: any) => {
        // console.log("delete user.ts 122 :",res);
        alert("User delete succesfully");
        this.getData();
      })
    }

  }
  onEdit(edit: any) {
    // console.log("edit user.ts 131:",edit)  
    // this.data = edit;
    // console.log("edit data user,ts 133:",this.data)
    // 
    this._id = edit._id;
    // console.log("ID :",this._id);
    // console.log(typeof(this._id))
    // this.api.onEditData(edit, this._id).subscribe((res:any)=>{
    //     // console.log(typeof(res));
    //     // console.log("user com.ts 141:",res);
    //     this.editForm  = res;
    //     console.log(this.editForm);
    //   });

    this.router.navigate(['/dashboard/edit',this._id]);


  }





  // public AllUsers = []
  getData() {
    this.api.getUserData().subscribe((x: any) => {
      // console.log(x)
      this.listData = x['AllUsers'];

    })
  }

}

function createNewUser(position: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  const phone = PHONE[Math.random()]
  //  Math.round(Math.random() * 100)
  const address = ADDRESS

  return {
    position: position.toString(),
    name: name,
    phone: phone,
    email: EMAIL[Math.round(Math.random() * (EMAIL.length - 1))],
    address: address
  };
}