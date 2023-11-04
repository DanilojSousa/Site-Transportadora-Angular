import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit, OnDestroy {

  carregaPagina = false;
  
  ngOnDestroy(): void {
    this.carregaPagina = true;
  }

  ngOnInit(): void {
    this.carregaPagina = false;
  }

}
