import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advfilter',
  templateUrl: './advfilter.component.html',
  styleUrls: ['./advfilter.component.scss']
})
export class AdvfilterComponent implements OnInit {
@Input() sidenavContainer:any;
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.sidenavContainer.close();
  }

}
