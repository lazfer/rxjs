import { Component, OnInit } from '@angular/core';
import { delay, scan } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { reduce } from 'rxjs/operators';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const valor = [1,2,3,4,5];
    const total = (acc, acu) => acc + acu;
    from(valor).pipe(
      reduce( total, 0)
    ).subscribe(
      res => console.log(res)
    );

    from(valor).pipe(
      scan(total, 0)
    ).subscribe(
      res => console.log(res)
    );

  }

}
