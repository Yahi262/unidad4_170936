import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './componentes/card/card.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NotasComponent } from './componentes/notas/notas.component';
import { TareasComponent } from './componentes/tareas/tareas.component';

import{FormsModule}from '@angular/forms';
import { AtividadComponent } from './componentes/atividad/atividad.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FooterComponent,
    NavbarComponent,
    NotasComponent,
    TareasComponent,
    AtividadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
