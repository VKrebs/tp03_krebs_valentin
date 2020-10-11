import { Component, Input, OnInit } from '@angular/core';
import { Observable, PartialObserver } from 'rxjs';
import { Product } from '../models/product';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.less']
})
export class CatalogueComponent implements OnInit {

  @Input() products : Observable<Product[]>;

  constructor() { }

  ngOnInit(): void {
  }
}
