import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContactService } from '../shared/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ContactList: Contact;

  constructor(
    private _contactService: ContactService, 
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this._contactService.selectedContact = {
      idcontact: null,
      nombre: '',
      email: '',
      whatsapp: ''
    }
  }


  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null) {
      this._contactService.grabarContacto(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this._contactService.listarContacto().subscribe((x: any) => {
            this._contactService.contactList = x;
          });;
          this.toastr.success('Contacto ingresado', 'Registro');
        })
    }
    else {
      this._contactService.actualizarContacto(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this._contactService.listarContacto().subscribe((x: any) => {
            this._contactService.contactList = x;
          });;
          this.toastr.info('Contacto actualizado', 'Registro');
        });
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