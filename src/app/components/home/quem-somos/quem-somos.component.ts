import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.css']
})
export class QuemSomosComponent implements OnInit, OnDestroy {
  
  carregaPagina = false;
  ngOnDestroy(): void {
    this.carregaPagina = true;
  }

  ngOnInit(): void {
    this.carregaPagina = false;
  }


}
