export class Streaming {
    idStreaming?: string;
    imagenStreamingURL?: string;
    tituloStreaming: string;
    plataformaStreaming: string;
    comentarioStreaming: string;
    valoracionStreaming: number;
    fotoStreaming?: string | undefined = "";
    userId?:string;

    constructor(imagenStreamingURL: string, tituloStreaming: string, plataformaStreaming: string, comentarioStreaming: string, valoracionStreaming: number, fotoStreaming: string, userId:string, idStreaming?: string,) {
        this.imagenStreamingURL = imagenStreamingURL;
        this.tituloStreaming = tituloStreaming;
        this.plataformaStreaming = plataformaStreaming;
        this.comentarioStreaming = comentarioStreaming;
        this.valoracionStreaming = valoracionStreaming;
        this.fotoStreaming = fotoStreaming;
        this.userId = userId;
        if(idStreaming){
            this.idStreaming= idStreaming; 
        }
    }
}
