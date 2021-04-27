import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-buttons',
  templateUrl: './audio-buttons.component.html',
  styleUrls: ['./audio-buttons.component.css']
})
export class AudioButtonsComponent implements OnInit {
  playedAudio = new Audio('./assets/1.mp3');
  sovrap = false;

  sounds = [
    { nome: "La polizza", id: 1 },
    { nome: "La polizza 2", id: 2 },
    { nome: "Buona cena a tutti", id: 3 },
    { nome: "Italoinglesi", id: 4 },
    { nome: "Alex merda 1", id: 5 },
    { nome: "Alex merda 2", id: 6 },
    { nome: "Canzone a caso", id: 7 },
    { nome: "Canzone a caso 2", id: 8 },
    { nome: "Canzone a caso 3", id: 9 },
    { nome: "Auguri", id: 10 },
    { nome: "Auguri 2", id: 11 },
    { nome: "Auguri Capodanno", id: 12 },
    { nome: "Auguri Pasqua", id: 13 },
    { nome: "Freezer", id: 14 },
    { nome: "Rap", id: 15 },
    { nome: "Guarda che fregno", id: 16 },
    { nome: "I know you want it uuuh", id: 17 },
    { nome: "Altarini", id: 18 },
    { nome: "Rosicà 1", id: 19 },
    { nome: "Rosicà 2", id: 20 },
    { nome: "L'alfabeto porcoddue", id: 21 },
    { nome: "Sigla Yu-Gi-Oh!", id: 22 },
    { nome: "Aspettateme per favore", id: 23 },
    { nome: "Baobabbuino", id: 24 },
    { nome: "È 'n grande quello", id: 25 },
    { nome: "Me so' giocato tutto", id: 26 },
    { nome: "Versi 1", id: 27 },
    { nome: "Versi 2", id: 28 },
    { nome: "Ucci ucci", id: 29 },
    { nome: "Torneino in tasca", id: 30 },
    { nome: "Strip yugi", id: 31 },
    { nome: "Robert Downey Gnugnor", id: 32 },
    { nome: "Dai ragazzi", id: 33 },
    { nome: "Dai cazzo", id: 34 },
    { nome: "HEHEHEHE", id: 35 },
    { nome: "Te pozzeno", id: 36 },
    { nome: "Chi s'accontenta gode", id: 37 },
    { nome: "Bel Maestro", id: 38 },
    { nome: "Vai al cimitero", id: 39 },
    { nome: "Lo scopriremo solo vivendo", id: 40 },
    { nome: "Lo sollecito, guarda", id: 41 },
    { nome: "M'ero messo paura", id: 42 },
    { nome: "Che belli i sogni", id: 43 },
    { nome: "Confusione", id: 44 },
    { nome: "Chi vuole la stessa cosa", id: 45 },
    { nome: "Grazie amori", id: 46 },
    { nome: "Heidi", id: 47 },
    { nome: "Heidi 2", id: 48 },
    { nome: "Il triangolo", id: 49 },
    { nome: "L'hanno pure fatto", id: 50 },
    { nome: "Giocondo", id: 51 },
    { nome: "Poste italiane", id: 52 },
    { nome: "Poste italiane 2", id: 53 },
    { nome: "Sommo amore te saluto", id: 54 },
    { nome: "Somebody to love", id: 55 },
    { nome: "Preliminari", id: 56 },
    { nome: "3x de Proibizione", id: 57 },
    { nome: "Le idee che c'ho io pe' i video", id: 58 },
    { nome: "Puzza di True Draco", id: 59 },
    { nome: "So' belle da vedè", id: 60 },
    { nome: "Questo qua batte tutto", id: 61 },
    { nome: "Sto in maghina", id: 62 },
    { nome: "A cazzo dritto", id: 63 },
    { nome: "Potrei dire cose che non voglio", id: 64 },
    { nome: "Spigni sempre", id: 65 },
    { nome: "Non so se l'ha visto", id: 66 },
    { nome: "Non rompe er cazzo", id: 67 },
    { nome: "La marcia di Show", id: 68 },
    { nome: "Il cassone", id: 69 },
    { nome: "Baobab", id: 70 },
    { nome: "Pure io", id: 71 },
    { nome: "Denuncialo", id: 72 },
    { nome: "Buco Nero comune", id: 73 },
    { nome: "O Bella Bionda", id: 74 },
    { nome: "Carte porno", id: 75 },
    { nome: "Quella leggerezza", id: 76 },
    { nome: "Ruba le bustine", id: 77 },
    { nome: "To love Antonio, Oinonio", id: 78 },
    { nome: "Rimanga tutto sul gruppo", id: 79 },
    { nome: "Modera i toni", id: 80 },
    { nome: "Ascensore", id: 81 },
  ]

  played = [ new Audio('./assets/1.mp3') ];


  constructor() {
    this.played = [];
  }

  ngOnInit(): void {
  }

  playAudio(id: number): void {
    if (this.sovrap == false && this.playedAudio.paused == false)
      this.playedAudio.pause();

    this.playedAudio = new Audio('./assets/' + id + '.mp3');
    this.played.push(this.playedAudio);
    this.playedAudio.play();
  }

  options(): void {
    this.playedAudio.pause();
    if(this.sovrap == false)
      this.sovrap = true;
    else
      this.sovrap = false;
  }

  stop(): void {
    this.played.forEach(function(value){
      value.pause();
    });
    this.played=[];
  }

  

}
