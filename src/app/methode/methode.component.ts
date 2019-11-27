
import { Component, OnInit } from '@angular/core';

import { DataMethod } from '../Model/DataMethod';
import { PostService } from '../Service/post.service';
import { Objet } from '../Model/Objet';
import { DonneesEnEntree } from '../Model/DonnesEnEntree';
import { Resultat } from '../Model/Resultat';
import { Boite } from '../Model/Boite';
import { TdFileService } from '@covalent/core/file';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-methode',
  templateUrl: './methode.component.html',
  styleUrls: ['./methode.component.css']
})
export class MethodeComponent implements OnInit {

  // Affichage dynamique
  ModeManuelle: boolean;
  StringPage: string;
  PageEntree = true;
  PageSortie = false;

  // Valeur temporaire des entrées
  nbObjet: number;
  ListeObjet: Array<Objet>;
  ListeTempoObjet: Array<Objet>;
  ListeBoite: Array<Boite>;
  ListeTempoBoite: Array<Boite>;

  file: File;


  // ===================================================
  // Valeur des input

  // OBJET
  couleurTempo: number;
  poidsTempo: number;

  // BOITE
  capaciteTempo: number;

  // ===================================================
  // Valeur des combobox

  LabelBouton = 'Chercher un fichier';


  constructor(private service: PostService, private fileUploadService: TdFileService, private http: HttpClient ) { }

  ngOnInit() {
    this.ListeObjet = new Array<Objet>();
    this.ListeBoite = new Array<Boite>();

    this.ListeTempoObjet = new Array<Objet>();
    this.ListeTempoBoite = new Array<Boite>();

    this.ModeManuelle = true;
    this.StringPage = 'Résultat';
  }

  /// =============================================================
  //  Ajout manuel d'un objet dans la liste d'objet
  //
  /// =============================================================
  Add() {
    if ( this.couleurTempo !== undefined && this.poidsTempo !== undefined ) {
       // Creation du nouvelle objet
    const addObjet = new Objet();

    // Affectation des valeurs des inputs
    addObjet.Couleur = this.couleurTempo;
    addObjet.Poids = this.poidsTempo;

    // Incrementation de l'id
    addObjet.IdObjet = this.ListeObjet.length + 1;

    // Définition d'une couleur par défaut
    addObjet.StringCouleur = '';

    // Ajout de la liste d'affichage
    this.ListeObjet.push(addObjet);
    }

  }

   /// =============================================================
  //  Ajout manuel d'un objet dans la liste des sacs
  //
  /// =============================================================
  AddSac() {

    const find = this.ListeBoite.findIndex(s => s.Capacite === this.capaciteTempo);

    if (this.ListeBoite.length === 0 || find < 0) {
      const addSac = new Boite();
      addSac.ListeObjet = new Array<Objet>();
      addSac.IdBoite = this.ListeBoite.length + 1;
      addSac.Capacite = this.capaciteTempo;

      this.ListeBoite.push(addSac);

    } else {
      alert(`La capacité ${this.capaciteTempo} existe déjà` );
    }

  }

  Delete(i: number) {

    this.ListeObjet.forEach(element => {
      if ( element.IdObjet > i) {
        element.IdObjet = element.IdObjet.valueOf() - 1;
      }
    });
    this.ListeObjet.splice( i.valueOf() - 1, 1);
  }

  DeleteSac(i: number) {
    this.ListeBoite.forEach(element => {
      if ( element.IdBoite > i) {
        element.IdBoite = element.IdBoite.valueOf() - 1;
      }
    });
    this.ListeBoite.splice( i.valueOf() - 1, 1);
  }


  ChangeMenu(changemenu: boolean) {

    this.ModeManuelle = changemenu;

    if (changemenu) {

      this.AffectationDeLaListeBoite(this.ListeTempoBoite, this.ListeBoite );
      this.AffectationDeLaListeObjet(this.ListeTempoObjet, this.ListeObjet );

      this.ListeTempoBoite = new Array<Boite>();
      this.ListeTempoObjet = new Array<Objet>();

    } else {

      this.AffectationDeLaListeBoite(this.ListeBoite, this.ListeTempoBoite );
      this.AffectationDeLaListeObjet(this.ListeObjet, this.ListeTempoObjet );

      this.ListeObjet = new Array<Objet>();
      this.ListeBoite = new Array<Boite>();
    }
  }

  // Affectation de la liste A dans la liste B
  AffectationDeLaListeBoite(ListeA: Array<Boite>, ListeB: Array<Boite>) {
    ListeA.forEach(element => {
      ListeB.push(element);
    });
  }

  AffectationDeLaListeObjet(ListeA: Array<Objet>, ListeB: Array<Objet>) {
    ListeA.forEach(element => {
      ListeB.push(element);
    });
  }





  selectEvent(file: File): void {
    this.http.get('assets/bench/' + file.name, {responseType: 'text'})
        .subscribe(data => console.log(data));
  }

  ChangementDePage() {
    if (this.StringPage === 'Résultat') {
      this.StringPage = 'Entrées';
      this.PageEntree = false;
      this.PageSortie = true;
    } else {
      this.StringPage = 'Résultat';
      this.PageEntree = true;
      this.PageSortie = false;
    }
  }

}
