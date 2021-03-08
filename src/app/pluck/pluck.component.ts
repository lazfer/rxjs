import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

    // Objeto { target: { baseURI: 'http://localhost:4200/' } }
    // regresa target.baseURI
    const keyUpPluck$ = keyup$.pipe(pluck('target','baseURI'));

    keyup$.subscribe(console.log);
    keyUpPluck$.subscribe(
      res => console.log(res)
    );


    

  }

}
