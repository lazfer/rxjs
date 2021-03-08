import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { interval } from 'rxjs/observable/interval';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/observable/empty' 
import { mapTo, scan, takeWhile, startWith, switchMap } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';



@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    fromEvent(document,'click').pipe(switchMap(() => interval(1000))).
    subscribe(res => console.log(res));

    const iniciar = document.getElementById('iniciar');
    const pausar = document.getElementById('pausar');
    const resultado = document.getElementById('resultado');
    // Observable contador hacia tras cada minuto
    const interval$ = interval(1000).pipe(mapTo(-1));
    // Obervable que indentifica caundo hace click en el boton mencionado
    // y asigna el valor indicado en el mapTo
    const iniciar$ = fromEvent(iniciar, 'click').pipe(mapTo(true));
    const pausar$ = fromEvent(pausar, 'click').pipe(mapTo(false));

    // Merge une o mezcla dos o mas observables
    // starWith permite asignar un valor inicial
    // switchMap hace una pausa en el observable y ejecuta la función indicada
    // scan obervable scanea y resta el valor al numero indicado
    // takeWhile observable que ejecuta la accion conforme a la condición indicada
    const marge$ = merge(iniciar$, pausar$).
    pipe(
      startWith(true),
      switchMap(val => (val ? interval$ : empty())),
      scan((acc, curr) => (curr ? curr + acc : acc),10),
      takeWhile(v => v >= 0)
    ).subscribe(
      (val: any) => (resultado.innerHTML = val));
    



  }

}
