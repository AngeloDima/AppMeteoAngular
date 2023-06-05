import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeteoPRE } from '../../models/met-attuale';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-previsioni',
  templateUrl: './previsioni.component.html',
  styleUrls: ['./previsioni.component.scss']
})
export class PrevisioniComponent implements OnInit {
  nomeCitta: string;

  meteoPrev?: MeteoPRE[];

  constructor(private route: ActivatedRoute, private metSev: MeteoService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nomeCitta = params['nome'];

      this.metSev.getPrevisioni(this.nomeCitta).subscribe((meteoPrev: MeteoPRE[]) => {
        console.log(meteoPrev);
        this.meteoPrev = meteoPrev;
      });

    });
  }
}



