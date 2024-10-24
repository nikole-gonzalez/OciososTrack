import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, lastValueFrom } from 'rxjs';
import { Pelicula } from '../class/pelicula';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class Sug1Service {
  URLSUG1: string = 'https://imdb-top-100-movies.p.rapidapi.com/';
  
  httpHeader = new HttpHeaders({ 
    //'x-rapidapi-key': 'c01c9f83ebmsh64ba1cce5c802f5p17bc02jsnc8631b2f9526',
    //'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  });

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();
   }

  /*getPeliculasLista(): Observable<Pelicula[]> {
    return this.http.get<{ status: string; data: { movies: Pelicula[] } }>(this.URLSUG1, { headers: this.httpHeader }).pipe(
      tap(response => console.log('Response fetched!', response)),
      // Extraer el array de películas de la respuesta
      map(response => {
        console.log("aquii =>>> " + response.status)
        if (response.status === 'undefined') {
          return response.data.movies; // Devuelve solo el array de película
        } else {
          throw new Error('Failed to fetch movies'); // Manejo de error
        }
      }),
      catchError(this.handleError<Pelicula[]>('Get peliculas', []))
    );
  }*/
  getPeliculas2():Observable<any>{
   return this.http.get(this.URLSUG1,{headers: this.httpHeader} )
  }

   getPeliculasLista(): Observable<Pelicula[]> {
    return this.http.get<{ status: string; data: { movies: Pelicula[] } }>(this.URLSUG1, { headers: this.httpHeader }).pipe(
      tap(async response => {
        // Guarda las películas en el almacenamiento local si la API responde
        await this.storage.set('peliculas', response.data.movies);
        console.log("Obtiene películas");
      }),
      map(response => {
        if (response.status === 'undefined') {
          return response.data.movies;
        } else {
          throw new Error('Failed to fetch movies');
        }
      }),
      catchError(this.handleError<Pelicula[]>('Get peliculas', []))
    );
  }

  async getPeliculasConFallback(): Promise<Pelicula[]> {
    try {
      const peliculas = await lastValueFrom(this.http.get<Pelicula[]>(this.URLSUG1, { headers: this.httpHeader }));
      await this.storage.set('peliculas', peliculas); // Guarda en Storage
      return peliculas;
    } catch (error) {
      console.error('Error al obtener desde API, usando almacenamiento local:', error);
      const peliculasGuardadas = await this.storage.get('peliculas'); // Obtiene de Storage
      return peliculasGuardadas || []; // Si no hay datos guardados, retorna un array vacío
    }
  }




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

