import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs/observable/range';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const range$ = range(1,5);
    console.log('inicio');
    range$.subscribe( res => {
     console.log(res);
    });
    console.log('fin');
  }

}
