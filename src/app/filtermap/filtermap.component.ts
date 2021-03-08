import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-filtermap',
  templateUrl: './filtermap.component.html',
  styleUrls: ['./filtermap.component.css']
})
export class FiltermapComponent implements OnInit {

  constructor() { }
  private arr = of(1,2,3,4,5,6,7,8);
  public cuadrado:number[] = [];
  
  ngOnInit() {
    // Asignamos a una variable el filtrado y el cuadrado de cada valor filtrado
    const cuadrado = pipe( filter( ( num:number) => num % 2 === 0), map( num => num * num));
    // Asignamos a una variable observable el valor del filtrado
    const cuadrado$ = cuadrado(this.arr);
    // Realizamos el subscribe y obtenemos el valor
    cuadrado$.subscribe(res => { this.cuadrado.push(res) });
  }

}
