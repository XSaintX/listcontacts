import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './contact/form/form.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './contact/list/list.component';

import { Routes, RouterModule } from '@angular/router';
//import { AppRoutes } from './app-routing.module';
import { FormsModule } from "@angular/forms";
//import { APP_ROUTES } from './app.routes';
//import {AppRoutingModule} from './app.routing';
import { ToastrModule } from 'ngx-toastr';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './person/person.component';
import { ContactlistComponent } from './person/contactlist/contactlist.component';
import { PopupComponent } from './person/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DetalleComponent } from './person/detalle/detalle.component';

@NgModule({
  declarations: [
    //BrowserModule, 
    //RouterModule,
    AppComponent,
    FormComponent,
    ContactComponent,
    ListComponent,
    PersonComponent,
    ContactlistComponent,
    PopupComponent,
    DetalleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    //HttpModule,
    HttpClientModule,
    ToastrModule.forRoot()

    //RouterModule.forRoot(APP_ROUTES)

  ],
  entryComponents: [PopupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
