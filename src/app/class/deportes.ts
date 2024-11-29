export class Deportes {
    
    idDeporte?: string;
    fotoCamaraDeporte?: string | undefined = "";
    nombreDeporte: string;
    lugarDeporte: string;
    comentarioDeporte: string;
    valoracionEntrenamiento: number;
    fechaDeporte: string | null;
    userId?:string;

    constructor(fotoCamaraDeporte: string, nombreDeporte: string, lugarDeporte: string, comentarioDeporte: string, valoracionEntrenamiento: number, fechaDeporte: string, userId:string, idDeporte?: string) {
        this.fotoCamaraDeporte = fotoCamaraDeporte;
        this.nombreDeporte = nombreDeporte;
        this.lugarDeporte = lugarDeporte;
        this.comentarioDeporte = comentarioDeporte;
        this.valoracionEntrenamiento = valoracionEntrenamiento;
        this.fechaDeporte = fechaDeporte;
        this.userId = userId;
        if(idDeporte){
            this.idDeporte= idDeporte; 
        }
    }

}
