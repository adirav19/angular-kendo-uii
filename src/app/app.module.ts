import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AvatarComponent, LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { LayoutComponent } from './layout.component';
import { ExpansionPanelComponent } from './expansionpanel.component';
import { PanelBarComponent } from './panelbar.component';
import { SplitterComponent } from './splitter.component';
import { StepperComponent } from './stepper.component';
import { TabStripComponent } from './tabstrip.component';
import { TileLayoutComponent } from './tilelayout.component';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { GridLayoutComponent } from './gridlayout.component';
import { StackLayoutComponent } from './stacklayout.component';

import { AppComponent } from './app.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from '@progress/kendo-angular-charts';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test/test1/test1.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { Test3Component } from './test3/test3.component';
import { Router, RouterModule } from '@angular/router';
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ButtonsModule,
        ScrollViewModule,
        FormsModule,
        CommonModule,
        LayoutModule,
        DropDownsModule,
        HttpClientModule,
        RouterModule,
        ChartsModule,
        DropDownsModule,
        InputsModule
        
    ],
    declarations: [
        AppComponent,
        
        ExpansionPanelComponent,
        GridLayoutComponent,
        LayoutComponent,
        PanelBarComponent,
        SplitterComponent,
        StackLayoutComponent,
        
        StepperComponent,
        TabStripComponent,
        TileLayoutComponent,
        TestComponent,
        Test1Component,
        Test3Component,
        
        
        
        

    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
