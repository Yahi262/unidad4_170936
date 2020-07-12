import { Component, OnInit } from '@angular/core';
import{NgForm}from '@angular/forms';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tarea:any={
    nombre:"",
  }
  listTareas:any[]=[];
  constructor(){
    console.log(this.listTareas);
  }
  guardarTarea(NgForm:NgForm){
    this.listTareas.push({
      nombre:this.tarea.nombre,
    });
    console.log(this.listTareas);
    this.tarea.nombre="";
  }
  ngOnInit(): void {
  }

}
