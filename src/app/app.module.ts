import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { PreguntasSeguridadComponent } from './preguntas-seguridad/preguntas-seguridad.component';

const rutas: Routes = [
  {
    path: 'preguntas-seguridad',
    component: PreguntasSeguridadComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    PreguntasSeguridadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
