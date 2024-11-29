export class Streaming {
    idStreaming?: string;
    fotoStreaming?: string | undefined = "";
    tituloStreaming: string;
    plataformaStreaming: string;
    comentarioStreaming: string;
    valoracionStreaming: number;
    userId?:string;

    constructor(fotoStreaming: string, tituloStreaming: string, plataformaStreaming: string, comentarioStreaming: string, valoracionStreaming: number, userId:string, idStreaming?: string,) {
        this.fotoStreaming = fotoStreaming;
        this.tituloStreaming = tituloStreaming;
        this.plataformaStreaming = plataformaStreaming;
        this.comentarioStreaming = comentarioStreaming;
        this.valoracionStreaming = valoracionStreaming;
        this.userId = userId;
        if(idStreaming){
            this.idStreaming= idStreaming; 
        }
    }
}
