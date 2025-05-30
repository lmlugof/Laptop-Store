import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {

  constructor() {   }
  private http = inject(HttpClient);
  private baseURL = environment.apiURL + '/weatherforecast';

  public obtenerClima() {
    return this.http.get<any>(this.baseURL);
  }
}
