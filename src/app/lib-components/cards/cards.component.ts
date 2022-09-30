import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
// @Input() title="";
// @Input() description="";
@Input() card = {
  id:'1',
  title:'Angular',
  description:'programs',
  src_image:'./assets/image2.jpg'
}
  constructor() { }

  ngOnInit(): void {
  }



}
