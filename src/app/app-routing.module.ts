import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'noticias' , component: NoticiasComponent},
  {path: 'tabela' , component: TabelaComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
