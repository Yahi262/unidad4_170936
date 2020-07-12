import { Component, OnInit } from '@angular/core';
import{NgForm}from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  nota:any={//es un objeto que va a recibir cualquier tipo de dato
    titulo:"",
    descripcion:"",
  }
  listNotas:any[]=[];//aqui se organizaran las notas, recuerdas?
  constructor() { 
    console.log(this.listNotas);//imprimimos lo que se acaba de ingresar al arreglo
  }
  guardarNota(form){//metodo que guardara lo que ingresa el usuario
    this.listNotas.push({
      titulo:this.nota.titulo,
      descripcion:this.nota.descripcion,
      fecha: new Date(),
    });
    localStorage.setItem('nota',JSON.stringify(this.nota));
    //console.log(this.listNotas);
    //limpia las cajas de texto
    this.nota.titulo="";
    this.nota.descripcion="";
    
  }
  mostrarNota(){
    this.nota=JSON.parse(localStorage.getItem('nota'));
    //his.nota={titulo:"",contra:""};
    
  }
  ngOnInit(): void {
  }
}
