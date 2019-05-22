import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { TabelaComponent } from './tabela/tabela.component';
import { TimesComponent } from './times/times.component';
import { Time1Component } from './time1/time1.component';
import { LiquidComponent } from './liquid/liquid.component';
import { SktComponent } from './skt/skt.component';
import { G2Component } from './g2/g2.component';
import { FlashwolvesComponent } from './flashwolves/flashwolves.component';
import { BuffaloComponent } from './buffalo/buffalo.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'noticias' , component: NoticiasComponent},
  {path: 'tabela' , component: TabelaComponent},
  {path: 'times' , component: TimesComponent},
  {path: 'time1' , component: Time1Component},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'liquid' , component: LiquidComponent},
  {path: 'skt' , component: SktComponent},
  {path: 'g2' , component: G2Component},
  {path: 'flashwolves' , component: FlashwolvesComponent},
  {path: 'buffalo' , component: BuffaloComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
