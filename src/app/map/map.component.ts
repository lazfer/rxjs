import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { range } from 'rxjs/observable/range';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const valMap$ = range(1,5).pipe(
      map( val => val * 10)
    );
    valMap$.subscribe(res => console.log(res));
    // Obtiene el evento keyup
    const keyUp$ = fromEvent<KeyboardEvent>(document,'keyup');
    // Regresa la propiedas code del evento
    
    const keyUpCode$ = keyUp$.pipe(
      map( res => res.code )
    );
    
    keyUpCode$.subscribe( code => console.log(code));
  }

}
