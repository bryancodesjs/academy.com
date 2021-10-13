import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'objectToArray';
  courses = {
    course: {
      title:"Blockchain 101",
      author:"John Doe", 
      link:"https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      students:"456"
    },
    course1: {
      title:"Introduction to day trading",
      author:"William Kirks", 
      link:"https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      students:"1,598"
    },
    course2: {
      title:"GPU Mining from zero to profit",
      author:"Sanada Otsuki",
      link:"https://images.pexels.com/photos/4581902/pexels-photo-4581902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      students:"993"
    },
    course3: {
      title:"Create (and sell) your own NFTs without blockchain nor drawing skills",
      author:"Sanada Otsuki",
      link:"https://imgsrv2.voi.id/4qPftfPI6oHrJKXRzhgBExPwlUzArjSZTa6C1ezr1aU/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MzE2MS8yMDIxMDUyMTE1MDctbWFpbi5jcm9wcGVkXzE2MjE1ODk5MDYuanBn.jpg",
      students:"8,470"
    },
    course4: {
      title:"Blockchain: Foundations and Use Cases",
      author:"ConsenSys",
      link:"https://s3.amazonaws.com/media.al-fanarmedia.org/wp-content/uploads/2021/01/26160334/source-Hoyes1.jpg",
      students:"2,046"
    },
    course5: {
      title:"Ethereum and Solidity",
      author:"Alexeyv Nklosa",
      link:"https://mk0criptonoticijjgfa.kinstacdn.com/wp-content/uploads/2021/02/solidity-lenguaje-programacion-actualizacion.jpg",
      students:"2,046"
    }
  };

  data = Object.values(this.courses);
}
