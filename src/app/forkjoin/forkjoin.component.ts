import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { interval } from 'rxjs/observable/interval';
import { of } from 'rxjs/observable/of';
import { delay, take } from 'rxjs/operators';


@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const fork$ = forkJoin(
      of('Hola'),
      of('Mundo').pipe(delay(500)),
      interval(1000).pipe(take(2))
    );
   fork$.subscribe(val => console.log(val));

   /* const diccionario$ = forkJoin(
     {
     google: ajax.getJSON('https://api.github.com/users/google'),
     microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
     youtube: ajax.getJSON('https://api.github.com/users/youtube'),
     }
   ); 
   diccionario$.subscribe(val => console.log(val));
   */

  }

}
