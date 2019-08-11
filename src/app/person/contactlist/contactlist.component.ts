import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PersonService } from '../shared/person.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Person } from '../shared/person.model';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  isValid: boolean = true;
  show: boolean = false;
  showgrabar: boolean = false;

  personList: Person[];

  constructor(
    private personservice: PersonService,
    private toastr: ToastrService,
    private currentRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    let id = this.currentRoute.snapshot.paramMap.get('id');
    if (id == null) {
      this.resetForm();
      this.personservice.listaralgunas().subscribe((data: any) => {
        this.personList = data;
      });
    }
    else {
      // this.personservice.listacontactos(parseInt(idx)).subscribe((res: any) => {
      //   this.personservice.formData = res.person;
      //   this.personservice.contactItems = res.personDetails;
      // });
      this.show = true;
      this.showgrabar = true;
      this.personservice.formData = {
        idperson: parseInt(id),
        Name: ''
      };
      this.personservice.listacontactos(parseInt(id)).subscribe((res: any) => {
        this.personservice.fullitem = res;
        this.personservice.todasPersonas().subscribe((data: any) => {
          this.personList = data;
        });
      });
    }
  }

  onChange(v) {
    this.personservice.idperson = v.target.value;

    this.show = true;
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.personservice.formData = {
      //id: null,
      idperson: 0,
      Name: ''
    };
    this.personservice.fullitem = [];
    //this.personservice.contactItems = [];
  }

  AddOrEditContactItem(contactItemIndex, id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { contactItemIndex, id };
    
    this.personservice.contact = id;
    this.dialog.open(PopupComponent, dialogConfig).afterClosed().subscribe(res => {
      this.showgrabar = true;
    });;
  }


  onDeleteContactItem(idcontact: number, i: number) {

    if (idcontact != null) {
      this.personservice.fullitem.splice(i, 1);
    }

  }


  onSubmit(form: NgForm) {


    let id = this.currentRoute.snapshot.paramMap.get('id');

    if (id == null) {

    }
    else {
      this.personservice.eliminarlista(parseInt(id)).then((res: any) => {

      });
    }
    this.personservice.grabar().subscribe(res => {
      this.resetForm();
      this.toastr.success('Lista de Contactos creada', '');
      //this.router.navigate(['/orders']);
    })
  }
}
