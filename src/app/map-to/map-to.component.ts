import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.css']
})
export class MapToComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
    // Retorna algo que nosotros desemos
    // Como un tecto numero etc.
    const mapTo$ = keyup$.pipe(
      mapTo('Regresa lo que deseamos'));

      mapTo$.subscribe(console.log);
  }

}
