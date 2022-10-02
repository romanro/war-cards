import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PreloaderComponent,
  ComputerPlayerComponent,
  HumanPlayerFormComponent,
} from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PreloaderComponent,
    ComputerPlayerComponent,
    HumanPlayerFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    PreloaderComponent,
    ComputerPlayerComponent,
    HumanPlayerFormComponent,
  ],
})
export class UiModule {}
