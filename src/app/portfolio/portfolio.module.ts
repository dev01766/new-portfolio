import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { AppModule } from '../app.module';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ItemsComponent, ItemComponent],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class PortfolioModule { }
