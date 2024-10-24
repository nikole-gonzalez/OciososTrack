export class Libros {

    idLibro?: string;
    imagenLibroURL?: string;
    tituloLibro: string;
    autorLibro: string;
    comentarioLibro: string;
    valoracionLibro: number;
    fotoCamaraLibro?: string | undefined = "";
    userId?:string;


    constructor(imagenLibroURL: string, tituloLibro: string, autorLibro: string, comentarioLibro: string, valoracionLibro: number, fotoCamaraLibro: string, userId:string, idLibro?: string,) {
        this.imagenLibroURL = imagenLibroURL;
        this.tituloLibro = tituloLibro;
        this.autorLibro = autorLibro;
        this.comentarioLibro = comentarioLibro;
        this.valoracionLibro = valoracionLibro;
        this.fotoCamaraLibro = fotoCamaraLibro;
        this.userId = userId;
        if(idLibro){
            this.idLibro= idLibro; 
        }
    }
}

