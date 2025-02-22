import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl= 'https://localhost:44398';

  constructor(private httpClient: HttpClient) { }
  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl +"/api/"+ "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
