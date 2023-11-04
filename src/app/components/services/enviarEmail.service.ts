import { EnviarEmail } from './../interface/enviarEmail';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, delay, EMPTY, first, map, Observable } from 'rxjs';
import { AppConstants } from '../interface/util/urlConstants';


@Injectable({
  providedIn: 'root'
})
export class EnviarEmailService {

  constructor(private msg: MatSnackBar, private http: HttpClient) { }

  
  cadastrarEnviarEmail(email: EnviarEmail) {
    const emails = email.email
    const nome = email.destinatario
    const conteudo = email.conteudo
    const assunto =  email.assunto
    const emailDtata= {emails, nome, conteudo, assunto}
    return this.http.post('http://localhost:3000/enviar-email', emailDtata);
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
