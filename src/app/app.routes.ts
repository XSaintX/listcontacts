import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PersonComponent } from './person/person.component';

export const APP_ROUTES: Routes = [
    { path: 'Contact', component: ContactComponent },
    { path: 'Person', component: PersonComponent }
];