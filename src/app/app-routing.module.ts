import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent, ChoosePlayersPageComponent } from './pages';
import { CanActivateChoosePlayers } from '@core/guards';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'players',
    canActivate: [CanActivateChoosePlayers],
    component: ChoosePlayersPageComponent,
  },
  {
    path: 'war',
    loadChildren: () =>
      import('./games/war/war.module').then((m) => m.WarModule),
  },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
