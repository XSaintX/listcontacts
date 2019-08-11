import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PersonComponent } from './person/person.component';
import { ContactlistComponent } from './person/contactlist/contactlist.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'Contact', component: ContactComponent },
    { path: 'Person', component: PersonComponent },
    {
        path: 'contactlist', children: [
            { path: '', component: ContactlistComponent },
            { path: 'edit/:id', component: ContactlistComponent }


        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }