import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { PrincipalComponent } from './components/home/principal/principal.component';
import { QuemSomosComponent } from './components/home/quem-somos/quem-somos.component';
import { ServicosComponent } from './components/home/servicos/servicos.component';
import { LgpdComponent } from './components/home/lgpd/lgpd.component';
import { ContatoComponent } from './components/home/contato/contato.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CotacaoComponent } from './components/home/cotacao/cotacao.component';
import { IConfig, provideEnvironmentNgxMask  } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
    QuemSomosComponent,
    ServicosComponent,
    LgpdComponent,
    ContatoComponent,
    RodapeComponent,
    CotacaoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    
  ],
  providers: [
    provideEnvironmentNgxMask(maskConfig),
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
