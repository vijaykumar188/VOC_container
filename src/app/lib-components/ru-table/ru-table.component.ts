import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ru-table',
  templateUrl: './ru-table.component.html',
  styleUrls: ['./ru-table.component.scss']
})
export class RuTableComponent implements OnInit {

  constructor() { }
  @Input() tableTitle="";
  @Input() totalTableDataCount="";
  ngOnInit(): void {
  }

}
