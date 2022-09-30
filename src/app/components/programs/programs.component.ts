import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  backClick(){
    this.route.navigate(['/csat'])
  }

}
