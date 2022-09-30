import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createReadStream } from 'fs';

@Component({
  selector: 'app-csat-module',
  templateUrl: './csat-module.component.html',
  styleUrls: ['./csat-module.component.scss']
})
export class CsatModuleComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  backClick(){
    this.route.navigate(['/login'])
  }
  cards =[ {
    id:'1',
    title:'program/sows',
    description:'program/sows',
    src_image:'./assets/image1.jpg'
  },
 { id:'2',
  title:'create_survey',
  description:'create_survey',
  src_image:'./assets/image2.jpg'
},
{ id:'3',
title:'Launch_survey',
description:'Launch_survey',
src_image:'./assets/image3.jpg'
},
{ id:'4',
title:'role-management',
description:'role-management',
src_image:'./assets/image4.jfif'
},
{ id:'5',
title:'question-bank',
description:'question-bank',
src_image:'./assets/image5.jfif'
},
{ id:'6',
title:'survey_exclusions',
description:'survey-exclusions',
src_image:'./assets/image6.jfif'
},
{ id:'7',
title:'survey_results',
description:'survey_results',
src_image:'./assets/image7.jfif'
},
{ id:'8',
title:'survey_forms',
description:'survey_forms',
src_image:'./assets/image2.jpg'
}
]


cardClicked(cards:any){
  
  
  if (cards.id == "1") 
  {
    this.route.navigate(['/programs']);
  }
  
  else if (cards.id == "2")
  {
    this.route.navigate(['/create-survey']);
  }
  
  else if (cards.id == "3")
  {
  this.route.navigate(['/launch-survey']);
  }

  else if (cards.id == "4")
  {
  this.route.navigate(['/user-role']);
  }

  else if (cards.id == "5")
  {
    this.route.navigate(['/question']);
  }

  else if (cards.id == "6")
  {
    this.route.navigate(['/survey-exclusion']);
  }

  else if (cards.id == "7")
  {
        this.route.navigate(['/survey-reults']);
  }

   else if(cards.id == "8")
   {
          this.route.navigate(['/survey-forms']);
    }
}
}
