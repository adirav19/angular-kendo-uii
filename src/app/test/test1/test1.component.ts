import { Component, OnInit } from '@angular/core';
import { LineStyle } from '@progress/kendo-angular-charts';

@Component({
    selector: 'app-test1',
    templateUrl: './test1.component.html'
   
})
export class Test1Component implements OnInit {
  constructor(){
    console.log( "test1calıstı")
  }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    public style: LineStyle = 'normal';
    
}