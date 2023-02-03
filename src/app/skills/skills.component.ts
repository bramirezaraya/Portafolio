import { Component, OnInit, ViewEncapsulation } from '@angular/core';

//carousel
// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

interface imagenes{
  img:string;
}

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None, // para el carousel
})
export class SkillsComponent implements OnInit {

  listaImagenes:Array<imagenes> = new Array<imagenes>();

  constructor() { }

  ngOnInit(): void {
    this.listaImagenes = [
      {img: 'angular.png'},
      {img: 'react.png'},
      {img: 'node.png'},
      {img: 'css.png'},
      {img: 'html.png'},
      {img: 'js.png'},
      {img: 'typescript.png'},
      {img: 'postgress.png'},
      {img: 'mysql.png'},
    ]
  }
}

