import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonService } from './shared/person.service';
import { ItemTable } from './shared/itemtable.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  personas: ItemTable[] = [];
  detalle: ItemTable;

  constructor(
    private _router:Router,
    private personservice: PersonService,
    private toastr: ToastrService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.refreshList();

  }

  Add(){
    this._router.navigate(['/contactlist']);
  }

  onSelectPerson(idperson: ItemTable) {
    this.personservice.Detalle(idperson.idcontact).subscribe((contact: any) => {
      this.detalle = contact;
    });
  }

  eliminarlista(id: number) {
    if (confirm('¿Esta seguro de eliminar esta lista de contactos?')) {
      this.personservice.eliminarlista(id).then((res:any) => {
        this.refreshList();
        this.toastr.warning("lista eliminada", "");
      });
    }
  }

  editarlista(idperson: number){
    this.router.navigate(['/contactlist/edit/'+ idperson]);
  }

  refreshList()
  {
    this.personservice.listapersonas().subscribe((data: any) => {
      this.personas = data;
    });

  }
}
