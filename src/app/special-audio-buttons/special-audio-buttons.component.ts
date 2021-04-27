import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-audio-buttons',
  templateUrl: './special-audio-buttons.component.html',
  styleUrls: ['./special-audio-buttons.component.css']
})
export class SpecialAudioButtonsComponent implements OnInit {
  playedAudio = new Audio('./assets/1.mp3');
  sovrap = false;

  
  sounds = [
    { nome: "De André", id: "S1" },
    { nome: "Minaccia del Maestro", id: "S2" },
    { nome: "Nascita del muto", id: "S3" },
    { nome: "Mmgh", id: "S4" },
    { nome: "Oh yeah", id: "S5" },
  ]

  played = [ new Audio('./assets/S1.mp3') ];

  constructor() {
    this.played = [];
  }

  ngOnInit(): void {
  }
  playAudio(id: string): void {
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
