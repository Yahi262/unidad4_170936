import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() nota:any;//el componente hijo recibe diferntes tipos de datos
  //aqui recibe lo de item
  constructor() { }

  ngOnInit(): void {
  }

}
