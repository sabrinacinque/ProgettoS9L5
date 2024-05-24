import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MarioBrandComponent } from './pages/mario-brand/mario-brand.component';
import { LuigiBrandComponent } from './pages/luigi-brand/luigi-brand.component';
import { ToadBrandComponent } from './pages/toad-brand/toad-brand.component';
import { Page404Component } from './pages/page404/page404.component';
import { NavbarComponent } from './main-component/navbar/navbar.component';
import { BrandsComponent } from './main-component/brands/brands.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MarioBrandComponent,
    LuigiBrandComponent,
    ToadBrandComponent,
    Page404Component,
    NavbarComponent,
    BrandsComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
