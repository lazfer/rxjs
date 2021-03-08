import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.css']
})
export class ConcatmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Crear un observable con una lista
    const list$ = of(2000,1000,3000);
    // Crear un observable con un concatmap
    // Permite controlar el orden asi que imprime con forme el delay
    const concatmap$ = list$.pipe(
    concatMap(res => of(`valor ${res}`).pipe(delay(res)))
    );
    // Crear la subscripcion e imprime la respuesta
  concatmap$.subscribe(res => console.log(res));
  }
}
