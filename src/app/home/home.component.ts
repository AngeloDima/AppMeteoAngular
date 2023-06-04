import { Component, OnInit } from '@angular/core';
import { MeteoATT, MeteoPRE } from '../models/met-attuale';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  meteo?: MeteoATT;


  constructor(private metSev: MeteoService) { }

  ngOnInit(): void {
    this.metSev.getMeteo().subscribe((meteoInfo: MeteoATT) => {
      console.log(meteoInfo);
      this.meteo = meteoInfo;
    });
  }

  getIconPath(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}.png`;
  }
}
