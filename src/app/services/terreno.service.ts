import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

const urlService='//testvicabamba.herokuapp.com/equipo/';

@Injectable({
  providedIn: 'root'
})
export class TerrenoService {

  constructor(private  http: HttpClient) { }
  obtenerTodos():Observable<any>{
    return this.http.post(urlService+'/obtenerTodos','');
  }
   crear(data): Observable<any>{
     return this.http.post(urlService+'/crear',data);
   }
}
