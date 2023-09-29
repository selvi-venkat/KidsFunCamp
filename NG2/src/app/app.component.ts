import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, Subject, combineLatest, concat, forkJoin, from, map, merge, mergeMap, of } from 'rxjs';
import { SampleService } from './Service/sample.service';
import { SampleService1 } from './Service/sample1.service';
import { APP_CONFIG } from './app.config';
import { MainBannerComponent } from './Component/main-banner/main-banner.component';
import { HttpClient } from '@angular/common/http';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide : APP_CONFIG,
    useValue: 'sdsdsd'
  }]
})

export class AppComponent {
  title = 'NG2';
  firstApiResult:any;
  mergeMapResult:any;
  secondApiResult:any;
  constructor(public sampServ: SampleService, private http: HttpClient){}
  @ViewChild('headerDetails') 
  headerComp : MainBannerComponent;

  retrieveDefaultData() {
    const source:any = this.http.get('https://jsonplaceholder.typicode.com/users/1');
    const source1:any= this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    const source2:any= this.http.get('https://jsonplaceholder.typicode.com/posts/4');
    const result = merge(source,source1,source2);
    result.subscribe(data => {console.log(data)});
}

  ngOnInit(){
    console.log('self tets');
    console.log(this.sampServ.count);
    this.retrieveDefaultData();
    console.log(this.firstApiResult);
  }
  ngAfterViewInit(){
    console.log(this.headerComp);
  }
  
  
  
}
//[ngStyle]="{color:p.available === 'available' ? 'green' : 'yellow'}"
//[ngClass]="{className: condition}"
//[ngClass]="{fadeIn: searchValue === ''}"