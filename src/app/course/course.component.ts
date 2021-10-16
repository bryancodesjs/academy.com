import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  descripcion: boolean = true;
  contenido: boolean = false;
  notas: boolean = false;
  
  seleccionarTab( opcion: string) {
    switch (opcion) {
      case 'descripcion':
        this.descripcion = true;
        this.contenido = false;
        this.notas = false;
        break;

      case 'contenido':
        this.descripcion = false;
        this.contenido = true;
        this.notas = false;
        break;
      
      case 'notas':
        this.descripcion = false;
        this.contenido = false;
        this.notas = true;
        break;

      default:
        this.descripcion = false;
        this.contenido = false;
        this.notas = false;
        break;
    }
  }

  @HostListener("window:scroll", ['$event'])
  scrollRead(){
    let offset = scrollY;
    let controls = (document.getElementById('sideMenu') as HTMLElement);
    let main = (document.getElementById('main') as HTMLElement);
    if (controls.className == "d-none") {
      controls.className = "d-none";
    } else {
      if (scrollY > 80) {
        controls.className = "fixed--to--screen col-lg-3 d-flex flex-column";
      }
      else {
        controls.className = "col-lg-3 d-flex flex-column";
      }
    }
  }
  toggleSideMenu(){
    let controls = (document.getElementById('sideMenu') as HTMLElement);
    let main = (document.getElementById('main') as HTMLElement);
    let toggleClip = (document.getElementById('toggleOnClip') as HTMLElement);
    if (controls.className == "fixed--to--screen col-lg-3 d-flex flex-column") {
      controls.className = "d-none";
      main.className = "col-lg-12";
      toggleClip.className = "toggle--on--clip show"
    } else {
      if (controls.className == "col-lg-3 d-flex flex-column") {
        controls.className = "d-none";
        main.className = "col-lg-12";
        toggleClip.className = "toggle--on--clip show";
      } else {
        controls.className = "col-lg-3 d-flex flex-column";
        main.className = "col-lg-9"
        toggleClip.className = "toggle--on--clip";
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
