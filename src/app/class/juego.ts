export class Juego {
    idJuego?: string;
    fotoCamaraJuego?: string | undefined = "";
    nombreJuego: string;
    descripcionJuego: string;
    valoracionJuego: number;
    formatoJuego: string;
    userId?:string;

    constructor(fotoCamaraJuego: string, nombreJuego: string, descripcionJuego: string, valoracionJuego: number, formatoJuego: string,  userId: string, idJuego?: string){
        this.fotoCamaraJuego = fotoCamaraJuego;
        this.nombreJuego = nombreJuego;
        this.descripcionJuego = descripcionJuego;
        this.valoracionJuego = valoracionJuego;
        this.formatoJuego = formatoJuego;
        this.userId= userId;
        if(idJuego){
            this.idJuego = idJuego;
        }
    }
}
