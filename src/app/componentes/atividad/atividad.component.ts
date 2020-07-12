import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atividad',
  templateUrl: './atividad.component.html',
  styleUrls: ['./atividad.component.css']
})
export class AtividadComponent implements OnInit {
  @Input() tarea:any;
  constructor() { }

  ngOnInit(): void {
  }

}
