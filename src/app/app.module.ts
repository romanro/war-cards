import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent, ChoosePlayersPageComponent } from './pages';
import { CanActivateChoosePlayers } from '@core/guards';
import { UiModule } from '@ui/ui.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent, ChoosePlayersPageComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, UiModule],
  providers: [CanActivateChoosePlayers],
  bootstrap: [AppComponent],
})
export class AppModule {}
