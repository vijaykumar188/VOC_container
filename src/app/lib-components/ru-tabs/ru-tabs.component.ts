import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ru-tabs',
  templateUrl: './ru-tabs.component.html',
  styleUrls: ['./ru-tabs.component.scss']
})
export class RuTabsComponent implements OnInit {


  @Input() items = [
    { id:1, name:'parameters', isClicked:true },
    { id:2, name:'requirements'},
    { id:3, name:'templats'},
    { id:4, name:'runbooks' },
  ]

  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changeButton(val:any){
    if(!val.disabled){
      this.items.forEach((item) => { item['isClicked'] = false; });
      val['isClicked'] = true;
      this.valueChange.emit(val);
      
    }
  }

  

}
