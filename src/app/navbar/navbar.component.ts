import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lightNav() {
    if ( (document.getElementById('navigationBar') as HTMLElement).className == "navbar navbar-expand-lg responsive--background" ) {
      (document.getElementById('navigationBar') as HTMLElement).className = "navbar navbar-expand-lg home--nav";
    }
    else {
      (document.getElementById('navigationBar') as HTMLElement).className = "navbar navbar-expand-lg responsive--background";
    }
    
  }
}
