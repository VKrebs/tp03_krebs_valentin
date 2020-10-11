import { Component, Input, OnInit } from '@angular/core';
import { Compte } from '../models/compte'

@Component({
  selector: 'app-recapitulatif-compte',
  templateUrl: './recapitulatif-compte.component.html',
  styleUrls: ['./recapitulatif-compte.component.less']
})
export class RecapitulatifCompteComponent implements OnInit {

  @Input() account: Compte;

  constructor() { }

  ngOnInit(): void {
  }

}
