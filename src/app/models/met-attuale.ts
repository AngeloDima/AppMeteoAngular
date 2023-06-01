export class MetAttuale {
  //per ogni dato creo il suo contenitore a piacimento
  tempoInfo?: { id: number; cielo: string; descrizione: string; icon: string; };
  principale?: { temperatura: number; tempMax: number; tempMin: number; umidita: number };
  vento?: { velocitaVento: number };
  nomeCitta?: string;

  //dichiaro tutto nel costruttore tramite oggetti
  constructor(nomeCitta?: string, tempoInfo?: { id: number; cielo: string; descrizione: string; icon: string },
    principale?: { temperatura: number; tempMax: number; tempMin: number; umidita: number },
    vento?: { velocitaVento: number }
  ) {

    //richiamo le proprietà
    this.tempoInfo = tempoInfo;
    this.principale = principale;
    this.vento = vento;
    this.nomeCitta = nomeCitta;
  }
}



