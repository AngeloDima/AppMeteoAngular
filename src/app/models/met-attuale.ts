export class MeteoATT {
  tempoInfo?: { id: number; cielo: string; descrizione: string; icon: string };
  principale?: { temperatura: number; tempMax: number; tempMin: number; umidita: number };
  vento?: { velocitaVento: number };
  nomeCitta?: string;

  constructor(
    nomeCitta?: string,
    tempoInfo?: { id: number; cielo: string; descrizione: string; icon: string },
    principale?: { temperatura: number; tempMax: number; tempMin: number; umidita: number },
    vento?: { velocitaVento: number }
  ) {
    this.nomeCitta = nomeCitta;
    this.tempoInfo = tempoInfo;
    this.principale = principale;
    this.vento = vento;
  }
}

// ----------------------------PREVISIONI-------------------------------------
export class MeteoPRE {
  dt?: number;
  nomeCitta?: string;
  priPrev?: { temperaturaPRE: number; temperaturaMIN: number; temperaturaMAX: number; umiditaPRE: number, orario: string };
  infoVento?: { vento: number }
  tempoInfo?: { descrizione: string }


  constructor(
    nomeCitta?: string,
    priPrev?: { temperaturaPRE: number; temperaturaMIN: number; temperaturaMAX: number; umiditaPRE: number, orario: string },
    infoVento?: { vento: number },
    tempoInfo?: { descrizione: string }
  ) {
    this.nomeCitta = nomeCitta;
    this.priPrev = priPrev;
    this.infoVento = infoVento;
    this.tempoInfo = tempoInfo

  }
}


