import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { ItemDetail } from '../shared/itempopup.model';
import { PersonService } from '../shared/person.service';
import { NgForm } from '@angular/forms';
import { ItemTable } from '../shared/itemtable.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  formData: ItemDetail;

  itemList: ItemTable[];
  itemtable: ItemTable[] = [];
  show: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PopupComponent>,
    private personservice: PersonService
  ) { }

  ngOnInit() {

    this.personservice.listarContactos(this.personservice.idperson).subscribe((data: any) => 
    {
      this.itemList = data;
    });
    if (this.data.contactItemIndex == null) 
    {
      
      this.formData = {
        id: null,
        idcontact: null
      }
    }
    else 
    {
      this.formData = {
        id: null,
        idcontact: this.personservice.contact
      }

    }
  }

  onSubmit(form: NgForm) {
    if (this.data.contactItemIndex == null) {
      for (let i = 0; i < this.personservice.fullitem.length; i++) {  //How to properly iterate here!!
        if (form.value.idcontact == this.personservice.fullitem[i].idcontact) {
          this.show = true;
          return;
        }
      }

      this.personservice.traerdetallecompleto(form.value.idcontact).subscribe((data: any) => {
        this.itemtable = data;
        this.personservice.fullitem.push({ idcontact: this.itemtable[0].idcontact, nombre: this.itemtable[0].nombre, email: this.itemtable[0].email, whatsapp: this.itemtable[0].whatsapp });

      });

    }
    else
      this.personservice.contactItems[this.data.contactItemIndex] = form.value;
    this.dialogRef.close();

  }

}
