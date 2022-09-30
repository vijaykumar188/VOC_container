import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-forms',
  templateUrl: './survey-forms.component.html',
  styleUrls: ['./survey-forms.component.scss']
})
export class SurveyFormsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  backClick(){
    this.route.navigate(['/csat'])
  }
}
