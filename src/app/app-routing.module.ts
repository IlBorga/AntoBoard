import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudioButtonsComponent } from './audio-buttons/audio-buttons.component';
import { SpecialAudioButtonsComponent } from './special-audio-buttons/special-audio-buttons.component';

const routes: Routes = [ { path:"audio", component:AudioButtonsComponent },
{ path:"", component:AudioButtonsComponent },
{ path:"specialaudio", component:SpecialAudioButtonsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
