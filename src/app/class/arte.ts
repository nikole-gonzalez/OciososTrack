export class Arte {
    idArte?: string;
    fotoCamaraArte?: string | undefined = "";
    nombreArte: string;
    descripcionArte: string;
    valoracionArte: number;
    materialesArte: string;
    userId?:string;

    constructor(fotoCamaraArte: string, nombreArte: string, descripcionArte: string, valoracionArte: number, materialesArte: string, userId: string, idArte?: string){
        this.fotoCamaraArte = fotoCamaraArte;
        this.nombreArte = nombreArte;
        this.descripcionArte = descripcionArte;
        this.valoracionArte = valoracionArte;
        this.materialesArte = materialesArte;
        this.userId= userId;
        if(idArte){
            this.idArte = idArte;
        }
    }
}
