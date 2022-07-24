import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { Test1Component } from './test1/test1.component';
import { Test1Module } from './test1/test1.module';



@NgModule({
  declarations: [
    
  
    
  ],
  imports: [
    CommonModule,
    Test1Module
  ],
  exports:[
    Test1Module
  ]
})
export class TestModule { }
