import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor() { }
  
  private _interval = interval(1000);
  public interval: number = 0;
  private _timer = timer(2000);
  public timer: string = '';
  ngOnInit() {
    this._interval.subscribe( val => {
      this.interval = val + 1;
    })

    this._timer.subscribe( res => {
      this.timer = `Se ejecutara despues de 2s`; 
    })


  }

}
