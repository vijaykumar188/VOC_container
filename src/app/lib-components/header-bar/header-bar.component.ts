import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {



  @Input() Title:string = '';
  @Output() back = new EventEmitter()
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  iconClick(){

    // this.route.navigate(['/login'])
    this.back.emit();

  }

}
