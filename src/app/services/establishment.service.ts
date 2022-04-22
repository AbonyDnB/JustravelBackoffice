import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Establishment } from '../pages/establishment/interface/establishment.interface';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  // constructor(private http:HttpClient) { }

  // createEstablishment(establishment:Establishment) {
  //   return this.http.post<Establishment>('/url', establishment)
  // }

}
