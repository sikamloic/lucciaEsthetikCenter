import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nos-soins',
  templateUrl: './nos-soins.component.html',
  styleUrls: ['./nos-soins.component.scss']
})
export class NosSoinsComponent implements OnInit {

  soins = [
    {
      name: 'laser-lumière pulsée',
      select: false,
      sub:[
        {name:'Jambes Entières', prix:'20.000'},
        {name:'Maillot', prix:'15.000'},
        {name:'Visage', prix:'10.000'},
        {name:'Aisselles', prix:'10.000'},
        {name:'Bras', prix:'10.000'},
        {name:'Haut du dos', prix:'10.000'},
      ]
    },
    {
      name: 'traitements du corps',
      select: false,
      sub:[
        {name:'lipocavitation radio fréquence lipolaser', prix:'40.000'},
        {name:'Gommage & masque à l’argile', prix:'30.000'},
        {name:'Gommage éclaircissant', prix:'25.000'},
        {name:'Gommage. anti-céllulite', prix:'20.000'},
        {name:'Spa & gommage clarifiant', prix:'20.000'},
        {name:'Dermalinfusion du fessier', prix:'15.000'},
        {name:'Gommage clarifiant', prix:'10.000'},
        {name:'Yoni Tox', prix:'15.000'},
        {name:'Vajacial', prix:'10.000'},
        {name:'Traitement des aisselles', prix:'8.000'},
        {name:'Traitement des quintos', prix:'5.000'},
        {name:'sauna', prix:'5.000'},
      ]
    },
    {
      name: 'vaccun therapy',
      select: false,
      sub:[
        {name:'Lifting Colombie(Fessier):Séance découverte', prix:30000},
        {name:'Lifting Colombie(Fessier):Séance complète 25.000 fcfa par séance (6 séances)', prix:'150.000'},
        {name:'Lifting Colombie(Poitrine):Séance découverte', prix:'20.000'},
        {name:'Lifting Colombie(Poitrine):Séance complète 15.000 fcfa par séance (6 séances)', prix:'90.000'},
      ]
    },
    {
      name: 'epilation a la cire',
      select: false,
      sub:[
        {name:'Epilation du corps (Bras, jambes, aisselles, maillots)', prix:'50.000'},
        {name:'Epilation du maillots / maillot intégrale', prix:'15000 /20000'},
        {name:'Epilation de la jambe entière', prix:'20.000'},
        {name:'Epilation de la demi jambes', prix:'10.000'},
        {name:'Epilation du dos', prix:'10.000'},
        {name:'Epilation des bras', prix:'10.000'},
        {name:'Epilation sourcils', prix:'5.000'},
        {name:'Epilation des aisselles', prix:'5.000'},
        {name:'Epilation menton & moustache', prix:'5.000'},
        {name:'Epilation des oreilles', prix:'3.000'},
        {name:'Epilation du nez', prix:'3.000'},
      ]
    },
    {
      name: 'visage',
      select: false,
      sub:[
        {name:'Microneeding', prix:'40.000'},
        {name:'BB GLOW', prix:'40.000'},
        {name:'Luminothérapie', prix:'30.000'},
      ]
    },
    {
      name: 'lèvres',
      select: false,
      sub:[
        {name:'Candy lips', prix:'30.000'},
        {name:'Contour lips', prix:'15.000'},
      ]
    },
    {
      name: 'dentaire',
      select: false,
      sub:[
        {name:'Blanchiment dentaire & détartrage', prix:'30.000'},
        {name:'Soin buccale & détartrage', prix:'15.000'},
      ]
    },
    {
      name: 'laser-lumière pulsée',
      select: false,
      sub:[
        {name:'Microblading', prix:'70.000'},
        {name:'Brown lamination', prix:'30.000'},
      ]
    },
    {
      name: 'cure de vergétures',
      select: false,
      sub:[
        {name:'Fesses, seins, ventre, hanches & cuisses', prix:'30.000'},
      ]
    },
  ]

  beautes = [
    {
      name: 'mise en beauté',
      select: false,
      sub : [
        {name:'Pose complète Gel', prix: '15.000'},
        {name:'Pose complète Résine', prix: '10.000'},
        {name:'Pédicure / manucure / vernis permanent', prix: '8.000'},
        {name:'Pédicure / manucure / vernis semi-permanent', prix: '5.000'},
        {name:'Pédicure / manucure / vernis classique', prix: '2.000'},
        {name:'Décoration des ongles', prix: '1.000'},
      ]
    },
    {
      name: 'extensions des cils',
      select: false,
      sub : [
        {name:'Extensions de cils à cils volume Russe', prix: '25.000'},
        {name:'Extensions de cils à cils mixte', prix: '15.000'},
        {name:' Extensions de cils à cils simple', prix: '10.000'},
        {name:'Extensions du bouquet', prix: '5.000'},
      ]
    },
    {
      name: 'soins de visage',
      select: false,
      sub : [
        {name:'Soins nourrissent & hydratant', prix: '10.000'},
        {name:'Soins traitant, purifiant & nettoyant éclat', prix: '15.000'},
        {name:'Soins régénérant intensif', prix: '30.000'},
        {name:'Soins dermaplanning', prix: '20.000'},
        {name:'Soins micro dermabrasion', prix: '20.000'},
      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
