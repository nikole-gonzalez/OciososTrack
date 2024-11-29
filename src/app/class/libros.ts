export class Libros {

    idLibro?: string;
    fotoCamaraLibro?: string | undefined = "";
    tituloLibro: string;
    autorLibro: string;
    comentarioLibro: string;
    valoracionLibro: number;
    userId?:string;


    constructor(fotoCamaraLibro: string, tituloLibro: string, autorLibro: string, comentarioLibro: string, valoracionLibro: number, userId:string, idLibro?: string,) {
        this.fotoCamaraLibro = fotoCamaraLibro;
        this.tituloLibro = tituloLibro;
        this.autorLibro = autorLibro;
        this.comentarioLibro = comentarioLibro;
        this.valoracionLibro = valoracionLibro; 
        this.userId = userId;
        if(idLibro){
            this.idLibro= idLibro; 
        }
    }
}

