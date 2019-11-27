import { Component, OnInit, Input } from '@angular/core';
import { Resultat } from '../Model/Resultat';
import { DonneesEnEntree } from '../Model/DonnesEnEntree';
import { PostService } from '../Service/post.service';
import { Objet } from '../Model/Objet';
import { Boite } from '../Model/Boite';


@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  // Valeur temporaire des sorties
  @Input()
  ListeObjet: Array<Objet>;

  @Input()
  ListeBoite: Array<Boite>;

  resultat: Resultat;

  Methods = [0];
  methodSelected: string;

  constructor(private service: PostService) { }

  ngOnInit() {
    this.resultat = new Resultat();
    this.resultat.ListeBoite = new Array<Boite>();
    const boite = new Boite();
    const objet = new Objet();
    objet.Couleur = 1;
    objet.Poids = 2;
    objet.IdObjet = 2;

    boite.IdBoite = 1;
    boite.Capacite = 1;
    boite.ListeObjet = new Array<Objet>();

    boite.ListeObjet.push(objet);
    boite.ListeObjet.push(objet);
    boite.ListeObjet.push(objet);


    this.resultat.ListeBoite.push(boite);
    this.resultat.ListeBoite.push(boite);
  }


  CalculMethod() {

    const data = new DonneesEnEntree();
    data.ListeObjet = this.ListeObjet;
    data.ListeBoite = this.ListeBoite;
    data.NbObjet = this.ListeObjet.length;
    data.NumMethode = 1;
    data.NbCouleur = Array.from(new Set(data.ListeObjet.map((item: Objet) => item.Couleur))).length;

    this.service.Calcul(data).subscribe(
      result => { this.resultat = result; },
      errors => { alert(JSON.stringify(errors)); }
    );
  }

}
