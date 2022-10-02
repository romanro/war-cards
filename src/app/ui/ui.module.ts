import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PreloaderComponent,
  ComputerPlayerComponent,
  HumanPlayerFormComponent,
} from './components';

@NgModule({
  declarations: [
    PreloaderComponent,
    ComputerPlayerComponent,
    HumanPlayerFormComponent,
  ],
  imports: [CommonModule],
  exports: [
    PreloaderComponent,
    ComputerPlayerComponent,
    HumanPlayerFormComponent,
  ],
})
export class UiModule {}
