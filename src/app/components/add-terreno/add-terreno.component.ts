import { Component, OnInit } from '@angular/core';
import {TerrenoService} from 'src/app/services/terreno.service';

@Component({
  selector: 'app-add-terreno',
  templateUrl: './add-terreno.component.html',
  styleUrls: ['./add-terreno.component.css']
})
export class AddTerrenoComponent implements OnInit {
  terreno={
    idTerreno:0,
    dimension:'',
    barrio:'',
    calleprincipal:''
  }

  constructor(private terrenoService:TerrenoService) { }

  ngOnInit(): void {
  }
  guardarTerreno():void{
    const data={
      idTerreno:this.terreno.idTerreno,
      dimension:this.terreno.dimension,
      barrio:this.terreno.barrio,
      calleprincipal:this.terreno.calleprincipal
    }
    //llamando al metodo crear ..
    this.terrenoService.crear(data).subscribe(
      response=>{
        console.log(response);

      },
      error=>{
        console.log(error);
      }
    )
  }

}
