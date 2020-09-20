import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, interval, timer, fromEvent, noop, of, concat, merge } from 'rxjs';
import { timeInterval, map } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    const interval1$ = interval(1000);

    const interval2$ = interval1$.pipe(
      map(res => res * 10)
    );

    const results$ = merge(interval1$, interval2$);

    // results$.subscribe(console.log);
    
    

  }

}
