import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.scss']
})
export class SurveyResultsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  backClick(){
    this.route.navigate(['/csat'])
  }
}
