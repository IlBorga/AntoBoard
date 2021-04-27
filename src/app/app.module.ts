import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioButtonsComponent } from './audio-buttons/audio-buttons.component';
import { SpecialAudioButtonsComponent } from './special-audio-buttons/special-audio-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioButtonsComponent,
    SpecialAudioButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
