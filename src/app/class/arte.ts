export class Arte {
    idArte?: string;
    imagenArteURL?: string;
    nombreArte: string;
    descripcionArte: string;
    valoracionArte: number;
    materialesArte: string;
    fotoCamaraArte?: string | undefined = "";
    userId?:string;

    constructor(imagenArteURL: string, nombreArte: string, descripcionArte: string, valoracionArte: number, materialesArte: string, fotoCamaraArte: string, userId: string, idArte?: string){
        this.imagenArteURL = imagenArteURL;
        this.nombreArte = nombreArte;
        this.descripcionArte = descripcionArte;
        this.valoracionArte = valoracionArte;
        this.materialesArte = materialesArte;
        this.fotoCamaraArte = fotoCamaraArte;
        this.userId= userId;
        if(idArte){
            this.idArte = idArte;
        }
    }
}
