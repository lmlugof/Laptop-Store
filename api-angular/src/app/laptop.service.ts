import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { LaptopCreation } from './laptop.models';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor() { }

  private http = inject(HttpClient);
  private baseURL = environment.apiURL + '/api/laptops';
  
  public create(laptop: LaptopCreation){
    return this.http.post(this.baseURL, laptop);
  } 
}



