import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch-survey',
  templateUrl: './launch-survey.component.html',
  styleUrls: ['./launch-survey.component.scss']
})
export class LaunchSurveyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  backClick(){
    this.route.navigate(['/csat'])
  }
}
