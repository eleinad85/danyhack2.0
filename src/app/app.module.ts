import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { ProfiloComponent } from './profilo/profilo.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      ProfiloComponent
   ],
   imports: [
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      AppRoutingModule,
      ColorPickerModule
   ],
   providers: [
      StorageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
