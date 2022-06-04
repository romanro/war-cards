import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'war',
    loadChildren: () => import('./war/war.module').then((m) => m.WarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
