import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
//import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router,private toast: NgToastService
    ) { }

  ngOnInit(): void {
  }

  loginClick() {
    this.route.navigate(['/csat']);
    //this.toastr.success('Hello world!', 'Toastr fun!');
    //this.toast.success({detail:"SUCCESS",summary:'Your Success Message'});
    this.toast.info({detail:"INFO",summary:'Your Info Message',sticky:true});
  }

}
