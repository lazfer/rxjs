import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
    const subject$ = new Subject();
    const observable$ = new Observable( res => {
        const setInt = setInterval( () => {
            res.next(Math.random());
            console.log('interval');
        }, 1000);
        return ( () => {
          clearInterval(setInt);
        });
    });

const obsSub$ = observable$.subscribe(subject$);

subject$.subscribe(
  res => { console.log('uno: ' + res )});
subject$.subscribe(
  res => { console.log('dos: ' +  res )}
)

setTimeout( () => {
obsSub$.unsubscribe();
},3000)
  }    

}
