import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudioButtonsComponent } from './audio-buttons/audio-buttons.component';

const routes: Routes = [ { path:"audio", component:AudioButtonsComponent },
{ path:"", component:AudioButtonsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
