import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { reduce } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.css']
})
export class ReduceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const num = [1,2,3,4,5];
    // Valor nuevo y valor acumulado
    // valor inicial 0 + 1 =  1
    // 1 + 2  = 3
    // 3 + 3 = 6
    // 6 + 4 = 10
    // 10 + 5 = 15
    const totalReduce = (acumulado:number, actual:number) => {
          return acumulado + actual
    }
    const total = num.reduce(totalReduce, 0);
    console.log(total);
    interval(1000).
    pipe(
      take(4),
      tap(console.log),
      reduce(totalReduce)
    ).subscribe(
      {
        next: valor => console.log(valor),
        complete: () => console.log('Completado')
      }
    )
  }



}
