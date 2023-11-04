import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/home/principal/principal.component';
import { QuemSomosComponent } from './components/home/quem-somos/quem-somos.component';
import { ServicosComponent } from './components/home/servicos/servicos.component';
import { LgpdComponent } from './components/home/lgpd/lgpd.component';
import { ContatoComponent } from './components/home/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { CotacaoComponent } from './components/home/cotacao/cotacao.component';


const routes: Routes = [
  {
    path: "", 
    component: PrincipalComponent
  },
  {
    path: "inicio", 
    component: PrincipalComponent
  },{
    path: "quemSomos", 
    component: QuemSomosComponent
  },{
    path: "servicos", 
    component: ServicosComponent
  },{
    path: "lgpd", 
    component: LgpdComponent
  },{
    path: "contato", 
    component: ContatoComponent
  },{
    path: "cotacao", 
    component: CotacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
