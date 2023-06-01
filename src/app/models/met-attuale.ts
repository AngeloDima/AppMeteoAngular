export class MetAttuale {
  tempoInfo?: { id: number; cielo: string; descrizione: string; icon: string; };
  principale?: { temperatura: number; tempMax: number; tempMin: number; umidita: number };
  vento?: { velocitaVento: number };
  nomeCitta?: string;

  constructor(nomeCitta?: string, tempoInfo?: { id: number; cielo: string; descrizione: string; icon: string },
    principale?: { temperatura: number; tempMax: number; tempMin: number; umidita: number },
    vento?: { velocitaVento: number }

  ) {
    this.tempoInfo = tempoInfo;
    this.principale = principale;
    this.vento = vento;
    this.nomeCitta = nomeCitta;
  }
}



