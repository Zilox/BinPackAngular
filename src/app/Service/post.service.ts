import { Injectable } from '@angular/core';
import { DataMethod } from '../Model/DataMethod';
import { HttpClient } from '@angular/common/http';
import { DonneesEnEntree } from '../Model/DonnesEnEntree';
import { Resultat } from '../Model/Resultat';


@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  // public getMethodeElementaire(sac: DataMethod) {
  //   return this.http.post<DataMethod>(`http://localhost:5000/api/methode/MethodeElementaire`, {});
  // }

  // public getRandom(alpha: Number, nbObjet: Number) {
  //   return this.http.post<DataMethod>(`http://localhost:5000/api/methode/GetRandom/${alpha}/${nbObjet}`, {});
  // }

  public Calcul(item: DonneesEnEntree) {

    return this.http.post<Resultat>(`http://localhost:5000/api/methode/Calcul`, item);
  }

}
