import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { Product } from '../models/product';
import { environment } from '../../environments/environment'
import { cpuUsage } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http:HttpClient) { }
  public getProducts () : Observable<Product[]>
  {
    return this.http.get<Product[]>(environment.backendProducts);
  }
}
