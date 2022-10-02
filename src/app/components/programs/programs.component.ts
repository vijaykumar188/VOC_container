import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';


import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
 
  
  constructor(private route: Router) { }
  @ViewChild('drawer', { static: true })sidenavContainer: MatDrawer;
  @ViewChild('sidenav', { static: true })sidenav: MatSidenav;
  showFiller = false;
  
  ngOnInit(): void {
  }
  backClick() {
    this.route.navigate(['/csat'])
  }



  selectedTab="parameters";
  headers = ["ID", "NAME", "AGE", "GENDER", "COUNTRY"]
  
  tabledata = [

    {
      "ID": "1",
      "NAME": "4ft",
      "AGE": "2",
      "GENDER": "MALE",
      "COUNTRY": "INDIA"
    },
    {
      ID: "2",
      NAME: "4ft",
      AGE: "2",
      GENDER: "MALE",
      COUNTRY: "INDIA"
    },
    {
      ID: "3",
      NAME: "4ft",
      AGE: "2",
      GENDER: "MALE",
      COUNTRY: "INDIA"
    },
    {
      ID: "2",
      NAME: "4ft",
      AGE: "2",
      GENDER: "MALE",
      COUNTRY: "INDIA"
    },
    {
      ID: "3",
      NAME: "4ft",
      AGE: "2",
      GENDER: "MALE",
      COUNTRY: "INDIA"
    },
    {
      ID: "2",
      NAME: "4ft",
      AGE: "2",
      GENDER: "MALE",
      COUNTRY: "INDIA"
    },
    {
      ID: "3",
      NAME: "4ft",
      AGE: "2",
      GENDER: "MALE",
      COUNTRY: "INDIA"
    },
    {
      ID: "2",
      NAME: "4ft",
      AGE: "2",
      GENDER: "MALE",
      COUNTRY: "INDIA"
    },
    {
      ID: "3",
      NAME: "4ft",
      AGE: "2",
      GENDER: "MALE",
      COUNTRY: "INDIA"
    },
   
    

  ]


  rowClick(){
    //this.route.navigate(['/login']);
    this.sidenav.open();

  }

  filterClick(){
    this.sidenavContainer.open();

  }


  tabItems=[
   
      { id:1, name:'parameters', isClicked:true },
      { id:2, name:'requirements',disabled:true},
      { id:3, name:'progrms'},
  ]

  changeTab(event:any){
    this.selectedTab = event.name;
    if(this.selectedTab == 'parameters'){
      alert('hi');


    }

    else if( this.selectedTab == 'requirements'){
      alert('hello');
    }

    else if( this.selectedTab == 'progrms'){
      alert('hello');
    }

  }
}
