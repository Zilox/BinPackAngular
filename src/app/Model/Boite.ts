import { Objet } from './Objet';

export class Boite {

    // Id des objets pour qu'ils soit unique
    IdBoite: Number;

    // Capacite du sac
    Capacite: Number;

    // Objet associé
    ListeObjet: Array<Objet>;
}
