import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {
  @Input() sidenav:any;
  constructor() { }

  ngOnInit(): void {
  }
  close(){
    this.sidenav.close();
  }
}
