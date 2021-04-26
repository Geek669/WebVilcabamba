import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerrenoDetailsComponent } from './components/terreno-details/terreno-details.component';
import { TerrenoListComponent } from './components/terreno-list/terreno-list.component';
import { AddTerrenoComponent } from './components/add-terreno/add-terreno.component';

@NgModule({
  declarations: [
    AppComponent,
    TerrenoDetailsComponent,
    TerrenoListComponent,
    AddTerrenoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
