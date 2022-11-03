import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { delay, filter } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  @ViewChild(MatSidenav)


  sidenav!: MatSidenav;

  constructor(
    private api : ApiService,
    private observer: BreakpointObserver, private router: Router) { }

  ngOnInit(): void {
    this.observer
    .observe(['(max-width: 800px)'])
    .pipe(delay(1))
    .subscribe((res:any) => {
      if(res.matches){
        this.sidenav.mode = 'over'
        this.sidenav.close();
      }
      else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });

    this.router.events
    .pipe(
    //  untilDestroyed(this),
     filter((e) => e instanceof NavigationEnd)
   )
   .subscribe(() => {
     if (this.sidenav.mode === 'over') {
       this.sidenav.close();
     }
   });
  
 }
  }
  
  

  

