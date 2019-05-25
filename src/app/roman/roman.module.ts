import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RomanComponent } from './roman/roman.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [RomanComponent],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class RomanModule { }
