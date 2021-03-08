import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { range } from 'rxjs/observable/range';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const filterNum$ = range(10,20).pipe(
      filter((val) => val %2 === 1));

      filterNum$.subscribe((res) => console.log(res));

      const heros = [
        {
          tipo: 'heroe',
          nombre: 'hulk'
        },
        {
          tipo: 'heroe',
          nombre: 'iron man'
        },
        {
          tipo: 'villano',
          nombre: 'joker'
        },
      ];

      //const data$ = heros.filter( res => res.tipo === 'heroe');
      const data$ = from(heros).pipe(
        filter(heroe => heroe.tipo === 'heroe')
       );
      data$.subscribe(res => console.log(res));

   //Anidacion de operadores

   const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
     map( event => event.code),
     filter( res => res === 'Enter')
   );

   keyup$.subscribe(console.log);

  }

}
