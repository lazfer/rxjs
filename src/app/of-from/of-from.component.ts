import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const observer$ = {
      next: res => console.log(res),
      error: error => console.log(error),
      complete: () => console.log('complete')
    }

    const dataOf$ = of([1,2,3,4,5]);
    const dataFrom$ = from([1,2,3,4,5]);


dataOf$.subscribe(observer$);
dataFrom$.subscribe(observer$);

const obs$ = {
  next: res => console.log(res),
  complete: () => console.log('Complete')
}

const textOf$ = of('Fernando');
const textForm$ = from('Fernando');

textOf$.subscribe(obs$);
textForm$.subscribe(obs$);

const resurce$ = from(fetch('https://api.github.com/users/klerith'));
resurce$.subscribe( async(res) => {
  console.log(res);
    const resData = await res.json();
    console.log(resData);
});
  }

}
