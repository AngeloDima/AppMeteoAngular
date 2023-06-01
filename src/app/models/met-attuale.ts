export class MetAttuale {
  tempoInfo: { id: number; cielo: string; descrizione: string; icon: string; }[];
  principale: { temperatura: number; tempMax: number; tempMin: number; umidita: number }[];
  vento: { velocitaVento: number }[];
  nomeCitta: string;

  constructor(nomeCitta: string) {
    this.tempoInfo = [];
    this.principale = [];
    this.vento = [];
    this.nomeCitta = nomeCitta;
  }
}



