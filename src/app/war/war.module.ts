import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarGameStartPageComponent } from './pages/war-game-start-page/war-game-start-page.component';
import { WarRoutingModule } from './war-routing.module';

@NgModule({
  declarations: [WarGameStartPageComponent],
  imports: [CommonModule, WarRoutingModule],
})
export class WarModule {}
