import { Empresa } from "./empresa"

export class EnviarEmail{

    id?: number
    email?: String
    destinatario?: string
    assunto?: string
    conteudo?: string
    enviado?: Boolean
	status?: string
	data: Date
	dataEnvio?: Date
	empresa: Empresa
    
    constructor(){
        this.enviado = false;
        this.data = new Date();
        this.empresa = new Empresa();
    }
}