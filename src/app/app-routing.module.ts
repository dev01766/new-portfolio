import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { ItemsComponent } from './portfolio/items/items.component';
import { RomanComponent } from './roman/roman/roman.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'portfolio', component: ItemsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'roman', component: RomanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
