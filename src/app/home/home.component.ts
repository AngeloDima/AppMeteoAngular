import { Component, OnInit } from '@angular/core';
import { MeteoATT } from '../models/met-attuale';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  meteo?: MeteoATT;
  city: string = '';

  constructor(private metSev: MeteoService) { }

  ngOnInit(): void {
    this.getMeteo();
  }

  getMeteo(): void {
    this.metSev.getMeteo(this.city).subscribe((meteoInfo: MeteoATT) => {
      console.log(meteoInfo);
      this.meteo = meteoInfo;
    });
  }

  getIconPath(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}.png`;
  }
}
