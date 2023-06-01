import { Component, OnInit } from '@angular/core';
import { MetAttuale } from '../models/met-attuale';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private metSev: MeteoService) { }

  ngOnInit(): void {
    this.metSev.getMeteo().subscribe(
      (meteoInfo) => {
        console.log(meteoInfo);
        this.meteo = meteoInfo
      }
    )
  }


  meteo: MetAttuale

}
