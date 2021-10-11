import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  clase:any = 'light-';
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goToProfile() {
    this._router.navigateByUrl('/profile');
  }
}
