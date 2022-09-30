import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  backClick(){
    this.route.navigate(['/csat'])
  }

}
