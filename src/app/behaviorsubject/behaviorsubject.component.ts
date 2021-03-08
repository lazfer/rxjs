import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';
import { merge } from 'rxjs/observable/merge';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-behaviorsubject',
  templateUrl: './behaviorsubject.component.html',
  styleUrls: ['./behaviorsubject.component.css']
})
export class BehaviorsubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const behavior$ = new BehaviorSubject(0);
    // Observable que estara detectado los click del mouse
   const click$ = fromEvent(document, 'click').pipe(
     map((e: MouseEvent) => ({
       x: e.clientX,
       y: e.clientY
     }))
     );

     // Tap controla cada evento del observable esto para el caso
     // si queremos controlar el valor que emite el observable
     // Al behavior le pasamos el 
    const interval$ = interval(1000).pipe(
      tap( num => behavior$.next(num))
    )

    // Mezcla los observables
    merge(click$, interval$).subscribe( res => console.log(res));


  }

}
