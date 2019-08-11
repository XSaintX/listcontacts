import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Contact: any[];

  constructor(
    private _contactService: ContactService
    ,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this._contactService.listarContacto().subscribe((x: any) => {
      this._contactService.contactList = x;
    });
  }

  showForEdit(cont: Contact) {
    this._contactService.selectedContact = Object.assign({}, cont);
  }

  onDelete(id: number) {
    if (confirm('¿Esta seguro de eliminar este contacto?') == true) {
      this._contactService.eliminarContacto(id).subscribe(x => {
        this._contactService.listarContacto().subscribe((x: any) => {
          this._contactService.contactList = x;
        });
        this.toastr.warning("Eliminado de todas las listas de contacto", "");
      })
    }
  }

}

class Contact {
  constructor(
    public idcontact: number,
    public nombre: string,
    public email: string,
    public whatsapp: string
  ) { }
}