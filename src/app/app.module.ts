import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchresComponent } from './searchres/searchres.component';

import { FormsModule } from '@angular/forms';
import { Ec2Component } from './ec2/ec2.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchresComponent,
    Ec2Component,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"ec2images",component:Ec2Component},
      {path:"ec2processes",component:Ec2Component},
      {path:"term",component:TerminalComponent},
      {path:"**",component:DashboardComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
