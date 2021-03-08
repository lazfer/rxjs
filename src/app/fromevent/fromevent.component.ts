import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements OnInit {
  public coordX:number = 0;
  public coordY:number = 0;
  constructor() { }

  ngOnInit():void {

    const mouse = fromEvent<MouseEvent>(document, 'click');
    const keyup = fromEvent<KeyboardEvent>(document, 'keyup');

    mouse.subscribe( ({x,y}) => {
      console.log('x: ' + x );
      console.log('y: ' + y );
    });
    
    keyup.subscribe( ({key}) => {
      console.log(key);
    })
 
  }

}
