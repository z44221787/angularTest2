import { Component, OnInit,Input,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  @Input() classInfo:any;
  constructor() { }

  setSay=(msg:string)=>console.log(msg);

  spanStyle=(style:{}={ "color":"red",'font-size': '22px',})=>{
    return style;
  }

  ngOnInit() {
  }

}
