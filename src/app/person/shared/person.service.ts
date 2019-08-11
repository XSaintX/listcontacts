import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './person.model';

import { ItemTable } from './itemtable.model';

import { environment } from 'src/environments/environment';
import { GLOBAL } from '../../GLOBAL';
import { ItemDetail } from './itempopup.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  formData: Person;
  contactItems: ItemTable[];
  fullitem: ItemTable[] = [];
  itempopup: ItemDetail[] = [];

  public headers: any;
  public urlApi: string;
  idperson: number;

  contact: number;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.urlApi = GLOBAL.urlApi;
  }

  grabar() {
    var body = {
      ...this.formData,
      fullitem: this.fullitem
    };
    //console.log(body);

    return this.http.post(`${this.urlApi}/crearLista`, body, { headers: this.headers });
  }

  listaralgunas(): Observable<any> {
    return this.http.get(`${this.urlApi}/listaralgunas`, { headers: this.headers });
  }

  listarContactos(idcontact: number) {
    return this.http.get(`${this.urlApi}/listarContactos/${idcontact}`, { headers: this.headers });
  }

  traerdetallecompleto(idcontact: number) {
    return this.http.get(`${this.urlApi}/traerdetallecompleto/${idcontact}`, { headers: this.headers });
  }

  listapersonas(): Observable<any> {
    return this.http.get(`${this.urlApi}/listapersonas/`, { headers: this.headers });
  }

  Detalle(idperson: number): Observable<any> {
    return this.http.get(`${this.urlApi}/Detalle/${idperson}`, { headers: this.headers });
  }

  cabecera(idperson: number): Observable<any> {
    return this.http.get(`${this.urlApi}/cabecera/` + idperson);
  }

  listacontactos(idperson: number): Observable<any> {
    return this.http.get(`${this.urlApi}/listacontactos/` + idperson);
  }

  eliminarlista(id: number) {
    return this.http.delete(`${this.urlApi}/eliminarlista/` + id).toPromise();
  }

  todasPersonas(): Observable<any> {
    return this.http.get(`${this.urlApi}/todasPersonas`, { headers: this.headers });
  }

}