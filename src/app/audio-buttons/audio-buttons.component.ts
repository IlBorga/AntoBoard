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
    { nome: "La Polizza", id: 1 },
    { nome: "Italoinglesi", id: 2 },
    { nome: "Buona cena a tutti", id: 3 },
    { nome: "Auguri", id: 4 },
    { nome: "Alex merda 1", id: 5 },
    { nome: "Alex merda 2", id: 6 },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  playAudio(id: number): void {
    if (this.sovrap == false && this.playedAudio.paused == false)
      this.playedAudio.pause();

    this.playedAudio = new Audio('./assets/' + id + '.mp3');
    this.playedAudio.play();
  }

  options(): void {
    this.playedAudio.pause();
    if(this.sovrap == false)
      this.sovrap = true;
    else
      this.sovrap = false;
  }

}
