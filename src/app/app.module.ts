import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ListMascotasComponent } from './Components/list-mascotas/list-mascotas.component';
import { FormMascotasComponent } from './Components/form-mascotas/form-mascotas.component';
import { MascotasDetailComponent } from './Components/mascotas-detail/mascotas-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListMascotasComponent,
    FormMascotasComponent,
    MascotasDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Inicializamos AngularFire
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
