import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotasComponent } from './componentes/notas/notas.component';
import { TareasComponent } from './componentes/tareas/tareas.component';


const routes: Routes = [
  {path:'notas',component:NotasComponent},
  {path:'tareas',component:TareasComponent},
  {path:'**',pathMatch:'full',redirectTo:'notas'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
