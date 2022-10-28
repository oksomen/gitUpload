import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  showFiller = true;

  
  constructor(private route : Router,
    private api : ApiService) { }

  ngOnInit(): void {
  }

  

}



// export class SidenavDrawerOverviewExample {}
