import { Situacao } from "./situacao";

export class Empresa{

    id?: number;
	nome?: string;
	email?: string;
	cnpj?: string;
	ie: string;
	cep?: string;
	endereco?: string;
	numero?: string;
	bairro?: string;
	cidade?: string;
	uf?: string;
	dataRegistro: Date;
	fone?: string;
	delete: boolean;
	instagram?: string;
	whatsapp?: string;
	facebook?: string;
	certificado?: Uint8Array;
	senhaEmail?: string;
	logo?: Uint8Array;
	situacao: Situacao;
	senhaCertificado?: string
    
    constructor(){
        this.dataRegistro = new Date();
		this.delete = false;
		this.situacao = new Situacao();
		this.ie = "ISENTO";
    }
}