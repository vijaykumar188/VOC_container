import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {

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
    }

  ]
}
