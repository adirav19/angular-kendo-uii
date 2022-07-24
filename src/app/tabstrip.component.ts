import { Binary } from '@angular/compiler';
import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SelectEvent } from '@progress/kendo-angular-layout';
import { TabScrollEvent } from '@progress/kendo-angular-layout/tabstrip/events/tabscroll-event';
import { AppComponent } from './app.component';
import { Test1Component } from './test/test1/test1.component';
declare var $:any
@Component({
    selector: 'tabstrip-component',
    template: `

        <div>asddfsdgf</div>

        <kendo-tabstrip [ngStyle]="{ width: '400px' }">
      <kendo-tabstrip-tab
      
        *ngFor="let item of items; let i = index;"
        
        [title]="item.city"
        [selected]="i == selected"
        [disabled]="item.disabled"

      >
      
        <ng-template kendoTabContent>

        </ng-template>
      </kendo-tabstrip-tab>
    </kendo-tabstrip>


    <kendo-tabstrip>
      <kendo-tabstrip-tab title="Tab 1" id="bir">
        <ng-template kendoTabContent>
            <app-test3></app-test3>
        </ng-template>
      </kendo-tabstrip-tab>
      <kendo-tabstrip-tab title="Tab 2"  id="iki">
        <ng-template kendoTabContent>
          <app-test></app-test>
        </ng-template>
      </kendo-tabstrip-tab>
    </kendo-tabstrip>
 
  

    `,
    styles: [`
    kendo-tabstrip p {
        margin: 0;
        padding: 8px;
    }
    `]
})
export class TabStripComponent implements OnDestroy, AfterViewInit {
    
    constructor(){
        console.log(this.ConvertStringToHTML(this.ourString))
    }
    ourString = '<button> <a href="#"> About us </a> </button>';
    public selectedd=0
    public selected=0
    
    public ngAfterViewInit(): void {
        
         setInterval(() => {
            
          if(this.selected == this.selectedd){
            this.selected = this.selectedd+1
            this.selectedd = this.selected
            if(this.selected == 4){
                this.selectedd = 0
                this.selected= 0
            }
          }
        }, 3000);
      }
    
      public ngOnDestroy(): void {
        clearInterval();
      }

      
    public items = [
      {
        disabled: false,
        city: "Paris",
        temp: 17,
        weather:"<app-test1></app-test1>",



    },
      
      {
        disabled: false,
        city: "New York",
        temp: 29,
        weather: "sunny",
        content:"<app-test></app-test>"
      },
     
    
    ];
    
     public ConvertStringToHTML = function (str) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(str, 'text/html');
        return doc.body;
     };
}
$.get("https://localhost")
