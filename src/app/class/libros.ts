export class Libros {

    idLibro?: string;
    imagenLibroURL?: string;
    tituloLibro: string;
    autorLibro: string;
    comentarioLibro: string;
    valoracionLibro: number;
    fotoCamaraLibro?: string | undefined = "";


    constructor(imagenLibroURL: string, tituloLibro: string, autorLibro: string, comentarioLibro: string, valoracionLibro: number, fotoCamaraLibro: string, idLibro?: string) {
        this.imagenLibroURL = imagenLibroURL;
        this.tituloLibro = tituloLibro;
        this.autorLibro = autorLibro;
        this.comentarioLibro = comentarioLibro;
        this.valoracionLibro = valoracionLibro;
        this.fotoCamaraLibro = fotoCamaraLibro;
        if(idLibro){
            this.idLibro= idLibro; 
        }
    }
}

