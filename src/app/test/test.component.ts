import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { LineStyle } from '@progress/kendo-angular-charts';

@Component({
    selector: 'app-test',
    template: `
      <kendo-dropdownlist [data]="['normal', 'step', 'smooth']" [(ngModel)]="style">
      </kendo-dropdownlist>
      <kendo-chart>
        <kendo-chart-series>
          <kendo-chart-series-item [style]="style" type="line"
              [data]="[20, 1, 18, 3, 15, 5, 10, 6, 9, 6, 10, 5, 13, 3, 16, 1, 19, 1, 20, 2, 18, 5, 12, 7, 10, 8]"
              [markers]="{ visible: false }">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `,

      
    
})
export class TestComponent {
    public style: LineStyle = 'normal';
}