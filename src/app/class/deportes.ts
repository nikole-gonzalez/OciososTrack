export class Deportes {
    idDeporte?: string;
    imagenDeporteURL?: string;
    nombreDeporte: string;
    lugarDeporte: string;
    comentarioDeporte: string;
    valoracionEntrenamiento: number;
    fotoCamaraDeporte?: string | undefined = "";
    fechaDeporte: string | null;
    userId?:string;

    constructor(imagenDeporteURL: string, nombreDeporte: string, lugarDeporte: string, comentarioDeporte: string, valoracionEntrenamiento: number, fotoCamaraDeporte: string, fechaDeporte: string, userId:string, idDeporte?: string) {
        this.imagenDeporteURL = imagenDeporteURL;
        this.nombreDeporte = nombreDeporte;
        this.lugarDeporte = lugarDeporte;
        this.comentarioDeporte = comentarioDeporte;
        this.valoracionEntrenamiento = valoracionEntrenamiento;
        this.fotoCamaraDeporte = fotoCamaraDeporte;
        this.fechaDeporte = fechaDeporte;
        this.userId = userId;
        if(idDeporte){
            this.idDeporte= idDeporte; 
        }
    }

}
