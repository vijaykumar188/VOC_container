import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.scss']
})
export class QuestionBankComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  backClick() {
    this.route.navigate(['/csat'])
  }


  headers = ["ID", "NAME",]
  tabledata = [

    {
      ID: "1",
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
    ID: "1",
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
      ID: "1",
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


  ]

  selectedTab="questions";

  tabItems=[
   
    { id:1, name:'questions', isClicked:true },
    { id:2, name:'draft'},
]

changeTab(event:any){
  this.selectedTab = event.name;
  if(this.selectedTab == 'questions'){
    //alert('hi');


  }

  else if( this.selectedTab == 'draft'){
    //alert('hello');
  }

}

}
