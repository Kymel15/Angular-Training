//Native Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Custom Modules
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const routes : Routes=[
  { 
    path:'',
    redirectTo: 'passengers',
    //component: HomeComponent,
    pathMatch: 'full'
  },
  { 
    path:'**',//** means anything that does not match should reder this
    component: NotFoundComponent,    
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent    
  ],
  imports: [
    //Native Modules
    BrowserModule, 
    CommonModule, 
    RouterModule.forRoot(routes, {useHash:true}),
    
  //Custom Modules
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }