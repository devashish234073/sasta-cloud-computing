import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    /*RouterModule.forRoot([
      {path:"c1",component:undefined},
      {path:"c2",component:undefined},
      {path:"c3",component:undefined},
    ])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
