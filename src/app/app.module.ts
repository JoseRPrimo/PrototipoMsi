import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JogosComponent } from './jogos/jogos.component';
import { TabelaComponent } from './tabela/tabela.component';
import { TimesComponent } from './times/times.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { Time1Component } from './time1/time1.component';
import { SktComponent } from './skt/skt.component';
import { G2Component } from './g2/g2.component';
import { LiquidComponent } from './liquid/liquid.component';
import { FlashwolvesComponent } from './flashwolves/flashwolves.component';
import { BuffaloComponent } from './buffalo/buffalo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JogosComponent,
    TabelaComponent,
    TimesComponent,
    NoticiasComponent,
    Time1Component,
    SktComponent,
    G2Component,
    LiquidComponent,
    FlashwolvesComponent,
    BuffaloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
