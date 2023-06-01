import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetAttuale } from '../models/met-attuale';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  city: string = "Catania";
  apiKey: string = "d31c75ca2c4c489eb1e41cc6fe56a1ca";
  url: string;

  constructor(private http: HttpClient) {
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`;
  }


  //prendo i dati dalla API e le mappo con le PIPE
  getMeteo() {
    return this.http.get(this.url).pipe(
      map((response: any) => {
        const meteoInfo: MetAttuale = new MetAttuale(this.city);

        //riassegno un nuovo nome per comodità  (il primo è il nome:   la seconda è il dato grezzo)
        meteoInfo.tempoInfo = {
          id: response.weather[0].id,
          cielo: response.weather[0].main,
          descrizione: response.weather[0].description,
          icon: response.weather[0].icon
        };

        meteoInfo.principale = {
          temperatura: response.main.temp,
          tempMax: response.main.temp_max,
          tempMin: response.main.temp_min,
          umidita: response.main.humidity
        };

        meteoInfo.vento = {
          velocitaVento: response.wind.speed
        };

        return meteoInfo;
      })
    );
  }
}
