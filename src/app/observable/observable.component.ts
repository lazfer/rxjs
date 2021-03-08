import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  constructor() { 
  }
  ngOnInit() {

    const obs$ =  new Observable<string>( subs => {
          subs.next('Respuesta del observable');
          // El error se arroja por ejecucion
          subs.complete();
          
    });

    obs$.subscribe( 
      (next:string) => { console.log(next); }, 
      (error:string) => { console.error(error); }, 
      () =>{ console.info('Completado');}
      ); 

    const intervalo$ = new Observable<number>( susb => {

      let i:number = 0;
      
    const setInt = setInterval( () => {
        i++;
         susb.next(i);
         console.log(i);
      },1000);
  // Limpia el set interval
      return () => {
      clearInterval(setInt);
      }
    })
const unsubs = intervalo$.subscribe( (res:number) => { console.log('num: ' + res )});

const unsubencadena1 = intervalo$.subscribe((res:number) => { console.log('sub1:' + res ) });
const unsubencadena2 = intervalo$.subscribe((res:number) => { console.log('sub2:' + res ) });
const unsubencadena3 = intervalo$.subscribe((res:number) => { console.log('sub3:' + res ) });

unsubencadena1.add(unsubencadena2).
              add(unsubencadena3);

setTimeout( () => {
  unsubs.unsubscribe();
  unsubencadena1.unsubscribe();
},3000);  
  }
}
