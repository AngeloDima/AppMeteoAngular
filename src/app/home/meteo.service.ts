import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeteoATT, MeteoPRE } from '../models/met-attuale';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  apiKey: string = 'd31c75ca2c4c489eb1e41cc6fe56a1ca';
  url: string;
  urlPre: string;

  constructor(private http: HttpClient) { }



  getMeteo(city: string) {

    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=it&units=metric&appid=${this.apiKey}`;

    return this.http.get(this.url).pipe(
      map((response: any) => {
        const meteoInfo: MeteoATT = new MeteoATT(city);

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



  getPrevisioni(city: string) {
    https://api.openweathermap.org/data/2.5/forecast?q=Catania&cnt=4&appid=d31c75ca2c4c489eb1e41cc6fe56a1ca
    this.urlPre = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=it&units=metric&cnt=3&appid=${this.apiKey}`;

    return this.http.get(this.urlPre).pipe(
      map((response: any) => {
        const meteoPrevisioni: MeteoPRE = new MeteoPRE(city);

        meteoPrevisioni.priPrev = {
          temperaturaPRE: response.list[0].main.temp,
          temperaturaMIN: response.list[0].main.temp_min,
          temperaturaMAX: response.list[0].main.temp_max,
          umiditaPRE: response.list[0].main.humidity,
        };

        meteoPrevisioni.infoVento = {
          vento: response.list[0].wind.speed
        };

        meteoPrevisioni.tempoInfo = {
          descrizione: response.list[0].weather[0].description
        }
        return meteoPrevisioni;
      })
    );
  }
}


