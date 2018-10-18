import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
// import { httpInterceptorProviders } from './http-interceptors/index';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    // httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
