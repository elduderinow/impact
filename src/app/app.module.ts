import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsteroidsComponent } from './components/asteroids/asteroids.component';
import { ViewportComponent } from './components/viewport/viewport.component';
import { InformationComponent } from './components/viewport/information/information.component';
import { DisplayHudComponent } from './components/viewport/display-hud/display-hud.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidsComponent,
    ViewportComponent,
    InformationComponent,
    DisplayHudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AsteroidsComponent,
    InformationComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
