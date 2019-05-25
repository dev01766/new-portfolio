import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemsComponent } from './portfolio/items/items.component';
import { ItemComponent } from './portfolio/item/item.component';
import { DividerComponent } from './divider/divider.component';
import { RomanComponent } from './roman/roman/roman.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AboutComponent,
    NavbarComponent,
    ItemsComponent,
    ItemComponent,
    DividerComponent,
    RomanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    ItemComponent,
    RomanComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
