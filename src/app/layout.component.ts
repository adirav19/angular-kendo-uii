import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'layout-component',
    template: `
        <div>
            <br>
            <br>
        </div>
        <div class="content" id="Avatar" *ngIf="selectedItem === 'Avatar'">

            <app-test1></app-test1>
          
        </div>
        
        <div class="content" id="ExpansionPanel" *ngIf="selectedItem === 'ExpansionPanel'">
            <expansionpanel-component></expansionpanel-component>
        </div>
        <div class="content" id="GridLayout" *ngIf="selectedItem === 'GridLayout'">
            <gridlayout-component></gridlayout-component>
        </div>
        <div class="content" id="PanelBar" *ngIf="selectedItem === 'PanelBar'">
            <panelbar-component></panelbar-component>
        </div>
        <div class="content" id="Splitter" *ngIf="selectedItem === 'Splitter'">
            <splitter-component></splitter-component>
        </div>
        <div class="content" id="StackLayout" *ngIf="selectedItem === 'StackLayout'">
            <stacklayout-component></stacklayout-component>
        </div>
        <div class="content" id="Stepper" *ngIf="selectedItem === 'Stepper'">
            <stepper-component></stepper-component>
        </div>
        <div class="content" id="TabStrip" *ngIf="selectedItem === 'TabStrip'">
            <tabstrip-component></tabstrip-component>
        </div>
        <div class="content" id="TileLayout" *ngIf="selectedItem === 'TileLayout'">
         <!--   <tilelayout-component></tilelayout-component> -->
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
    .content {
        padding: 20px;
    }
    .header {
        padding: 20px 20px 0 20px;
        text-align: center;
    }
    `]
})
export class LayoutComponent {
    @Input()
    public selectedItem!: string;
}
