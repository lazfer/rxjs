import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, Subject } from 'rxjs';
import { from } from 'rxjs/observable/from';
import { interval } from 'rxjs/observable/interval';
import { timer } from 'rxjs/observable/timer';
import { multicast, tap } from 'rxjs/operators';


@Component({
  selector: 'app-multicast',
  templateUrl: './multicast.component.html',
  styleUrls: ['./multicast.component.css']
})
export class MulticastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Creamos un observable from con un arreglo
    const from$ = from([1,2,3,4]);
    // Creamos un observable multicast
    const multicas$ = from$.pipe(multicast( () => new Subject())) as ConnectableObservable<any>;
    // Hacemos una subscripcion que se invocara una por cada elemento del arreglo
    multicas$.subscribe( res => console.log(`Obs D: ${res}`));
    multicas$.subscribe( res => console.log(`Obs C: ${res}`));
    // connect invoca a los observables
    multicas$.connect();

    // Creamos un observable interval que se ejecutara cada minuto
    // Tap permite ejecutar el observable cada 3s
    const interval$ = interval(3000).pipe(
      tap( res => console.log( `ID ${res}`))
    );
    const multicas2$ = interval$.pipe(multicast( () => new Subject())) as ConnectableObservable<any>;
     multicas2$.subscribe(res => console.log(`http://localhost4200/: ${res}`));
     multicas2$.subscribe(res => console.log(`http://localhost4200/: ${res - 1}`));
     const multicasUnsub = multicas2$.connect();
  
     const timer$ = timer(7000);
     timer$.subscribe(() => {
       multicasUnsub.unsubscribe();
     })
     

  }

}
