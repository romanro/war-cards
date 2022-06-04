import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarGameStartPageComponent } from './pages/war-game-start-page/war-game-start-page.component';

const routes: Routes = [
  {
    path: '',
    component: WarGameStartPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarRoutingModule {}
