import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { timer } from 'rxjs/observable/timer';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-buffertime',
  templateUrl: './buffertime.component.html',
  styleUrls: ['./buffertime.component.css']
})
export class BuffertimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Crea observable de interval
    const interval$ = interval(500);
    // Crea observable de tipo bufferTime
    const buffertime$ = interval$.pipe(
      bufferTime(2000, 1000));
    // Imprime el valor del buffer
   const buffertimeUnsub$ =  buffertime$.subscribe( val => console.log(val));
   
   // Creamos un timer de 8s y hacemos una unsubscribe de buffertime
   const timer$ = timer(8000);
   timer$.subscribe( ()=> {
    buffertimeUnsub$.unsubscribe();
   })

  }
  
  

}
