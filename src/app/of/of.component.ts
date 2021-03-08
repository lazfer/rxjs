import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    const valOf = of<any>([1,2,3,4],
      {nombre:'fer', apellido: 'ag'},
      true,
      Promise.resolve(true));
    
    valOf.subscribe(subs => {
      console.log(subs);
    })




  }

}
