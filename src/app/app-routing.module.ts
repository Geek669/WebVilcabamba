//se añaden todas las rutas..nesesarias para el funcionamiento
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerrenoDetailsComponent } from './components/terreno-details/terreno-details.component';
import { TerrenoListComponent } from './components/terreno-list/terreno-list.component';
import { AddTerrenoComponent } from './components/add-terreno/add-terreno.component';
//logica con arreglos..
const routes: Routes = [
  {path:'',redirectTo:'terreno',pathMatch:'full'},
  {path:'terreno',component:TerrenoListComponent},
  {pathMatch:'add',component:AddTerrenoComponent},
  {path:'terreno/:id',component:TerrenoDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
