import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.scss']
})
export class SurveyResultsComponent implements OnInit {

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
