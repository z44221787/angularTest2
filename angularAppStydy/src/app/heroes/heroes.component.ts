import { Component, OnInit, Input, ViewChild,ElementRef,ViewChildren, ViewContainerRef } from '@angular/core';
import {HeroService} from '../service/hero.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroesDetailComponent } from '../heroes-detail/heroes-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private http:HttpClient,private service:HeroService) { }
  ClassList:Observable<any>;
  classInfo:any;
  event:any;
  @ViewChild("heroDetail",{read:ViewContainerRef}) heroDetail;
  @ViewChildren(HeroesDetailComponent) children;

  onChoose(ClassInfo?:any,event?:any):void{
    this.classInfo=ClassInfo;
    this.event=event;
    console.log(this.heroDetail.nativeElement);
    console.log(this.children);
  }

  ngOnInit() {
       this.service.getClassList().subscribe(data=>{
          this.ClassList=data.list;
       });

  }

}
