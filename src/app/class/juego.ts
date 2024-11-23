export class Juego {
    idJuego?: string;
    imagenJuegoURL?: string;
    nombreJuego: string;
    descripcionJuego: string;
    valoracionJuego: number;
    formatoJuego: string;
    fotoCamaraJuego?: string | undefined = "";
    userId?:string;

    constructor(imagenJuegoURL: string, nombreJuego: string, descripcionJuego: string, valoracionJuego: number, formatoJuego: string, fotoCamaraJuego: string, userId: string, idJuego?: string){
        this.imagenJuegoURL = imagenJuegoURL;
        this.nombreJuego = nombreJuego;
        this.descripcionJuego = descripcionJuego;
        this.valoracionJuego = valoracionJuego;
        this.formatoJuego = formatoJuego;
        this.fotoCamaraJuego = fotoCamaraJuego;
        this.userId= userId;
        if(idJuego){
            this.idJuego = idJuego;
        }
    }
}
