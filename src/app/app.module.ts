import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { StandaloneComponent2 } from './standalone copy/standalone.component';
import { StandaloneComponent } from './standalone/standalone.component';

@NgModule({
  declarations: [AppComponent, DefaultComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StandaloneComponent,
    StandaloneComponent2,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
