import { Component, OnInit, Input } from '@angular/core';
import { ItemTable } from '../shared/itemtable.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() idperson: ItemTable;

  constructor() { }

  ngOnInit() {
  }

}
