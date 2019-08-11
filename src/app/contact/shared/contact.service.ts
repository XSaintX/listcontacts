import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from '../../GLOBAL';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    selectedContact: Contact;

    public headers: any;
    public urlApi: string;
    contactList : Contact[];
    constructor(
        public http: HttpClient
    ) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        this.urlApi = GLOBAL.urlApi;
    }

    listarContacto(): Observable<any> {
        return this.http.get(`${this.urlApi}/listarContacto`, { headers: this.headers })
        
      ;
    }

    grabarContacto(contact: Contact): Observable<any> {
        let body = contact;
        //this is the api for insert
        //this is the post that executs for insert
        return this.http.post(`${this.urlApi}/grabarContacto`,
            JSON.stringify(body), { headers: this.headers });
    }

    actualizarContacto(contact: Contact): Observable<any> {
        let body = contact;
        return this.http.put(`${this.urlApi}/actualizarContacto`, body, { headers: this.headers });
    }

    eliminarContacto(idcontact: number): Observable<any> {
        return this.http.delete(`${this.urlApi}/eliminarContacto/${idcontact}`, { headers: this.headers });
    }

}

interface Contact {
    idcontact: number;
    nombre: string;
    email: string;
    whatsapp: string;
}