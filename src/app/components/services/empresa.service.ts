import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, delay, first, map } from 'rxjs';
import { AppConstants } from '../interface/util/urlConstants';
import { Empresa } from '../interface/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private msg: MatSnackBar, private http: HttpClient) { }

  cadastrarEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(AppConstants.urlEmpresa + "/salvar", empresa).pipe(
      map((obj) => obj),
      catchError((e) => this.error(e)),
    );
  }

  excluirEmpresa(id: string){
    const url = AppConstants.urlEmpresa + "/delete/" + id;
    return this.http.delete(url).pipe(
      map((obj) => obj),
      catchError((e) => this.error(e)),
    );
  }

  selecionarTodos(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(AppConstants.urlEmpresa + "/getAll").pipe(
      first(),
      delay(500),
      map((obj) => obj),
      catchError((e) => this.error(e)),
    );
  }
  
  selecionarPorId(id: string): Observable<Empresa>{
    return this.http.get<Empresa>(AppConstants.urlEmpresa + "/getById/?id=" + id).pipe(
      map((obj) => obj),
      catchError((e) => this.error(e)),
    );
  }

  selecionarAtivo(): Observable<Empresa>{
    return this.http.get<Empresa>(AppConstants.urlEmpresa + "/getByAtivo").pipe(
      map((obj) => obj),
      catchError((e) => this.error(e)),
    );
  }

  getByEmpresa(idUsuario: string): Observable<Empresa>{
    return this.http.get<Empresa>(AppConstants.urlEmpresa + "/getByEmpresaUsuario/"+ idUsuario).pipe(
      map((obj) => obj),
      catchError((e) => this.error(e)),
    );
  }

  message(valor: string, isError: Boolean = false):void{
      this.msg.open(valor, "X",{
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-sucess']
      })
  }

  error(e: any): Observable<any>{
    this.message("Ocorreu um erro!", true)
    return EMPTY;
  }
}
