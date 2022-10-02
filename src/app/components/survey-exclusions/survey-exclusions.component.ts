import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-exclusions',
  templateUrl: './survey-exclusions.component.html',
  styleUrls: ['./survey-exclusions.component.scss']
})
export class SurveyExclusionsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  backClick() {
    this.route.navigate(['/csat'])
  }

  headers = ["ID", "NAME", "AGE", "GENDER", "COUNTRY"]
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
      ID: "3",
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
}
