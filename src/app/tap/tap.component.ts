import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs/observable/range';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    range(1,5).pipe(
      tap( x => console.log('antes ',x)),
      map( x => x * 10),
      tap( {
next: x => console.log('despues ', x),

complete: () => console.log('completado')

      })
    ).subscribe(res => console.log('subs',res));
  }

}
