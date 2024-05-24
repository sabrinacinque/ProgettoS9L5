import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarioBrandComponent } from './pages/mario-brand/mario-brand.component';
import { LuigiBrandComponent } from './pages/luigi-brand/luigi-brand.component';
import { ToadBrandComponent } from './pages/toad-brand/toad-brand.component';
import { Page404Component } from './pages/page404/page404.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
    title:'Home'
  },
  {
    path:"mariobrand",
    component: MarioBrandComponent,
    title:'Mario Brand'
  },
  {
    path:"luigibrand",
    component: LuigiBrandComponent,
    title:'Luigi Brand'
  },
  {
    path:"toadbrand",
    component: ToadBrandComponent,
    title:'Toad Brand'
  },
 {
    path:'car/:model',
    component: DetailComponent,
    title:'car Detail'
  },
  {
    path:'**',
    component: Page404Component,
    title:'Not Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
