import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval'; 
import { range } from 'rxjs/observable/range';
import { concat } from 'rxjs/observable/concat';

@Component({
  selector: 'app-takecontac',
  templateUrl: './takecontac.component.html',
  styleUrls: ['./takecontac.component.css']
})
export class TakecontacComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Creamos una variable de tipo observable de intervalo de un minuto
    // donde se ocupa take para repetir el intervalo 4 veces
    const interval$ = interval(1000).pipe(
      take(4)
    );
    // Creamos una variable de tipo observable de tipo rango donde comienza en 1 hasta el 10
    const range$ = range(1,10);
    // Concat concatena varios observables
    const concat$ = concat(interval$,range$);
    // Solo imprime el valor de los observables
    concat$.subscribe(x => console.log(x));
  }

   

}
