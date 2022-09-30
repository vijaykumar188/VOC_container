import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-exclusions',
  templateUrl: './survey-exclusions.component.html',
  styleUrls: ['./survey-exclusions.component.scss']
})
export class SurveyExclusionsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  backClick(){
    this.route.navigate(['/csat'])
  }
}
