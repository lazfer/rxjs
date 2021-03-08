import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { tap,mapTo,share } from 'rxjs/operators';
@Component({
  selector: 'app-shareobs',
  templateUrl: './shareobs.component.html',
  styleUrls: ['./shareobs.component.css']
})
export class ShareobsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Observable timer
    const timerval = timer(1000);
    //Observable timer aplicando pipe tap y mapTo
    const timer$ =  timerval.pipe(
    tap( () => console.log('Tap on')),
    mapTo('End Tap')
    );

    // Observables que no son compartidos
    const obs1$ = timer$.subscribe( res => console.log(res));
    const obs2$ = timer$.subscribe( res => console.log(res));
    // Creamos variable de tipo observable donde le asignamos un observable compartido
    const share$ = timer$.pipe(share());
    console.log('Shere on');
    // Creamos los observables compartidos
    const obs3$ = share$.subscribe( res => console.log(res));
    const obs4$ = share$.subscribe( res => console.log(res));
  }

}
