import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Pelicula } from '../class/pelicula';

@Injectable({
  providedIn: 'root'
})
export class Sug1Service {
  URLSUG1: string = 'https://imdb-top-100-movies.p.rapidapi.com/';
  
  httpHeader = new HttpHeaders({ 
    'x-rapidapi-key': 'c12b4a7325msha2141db19a90ab9p1919b2jsnf6414955ccfd',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getPeliculasLista(): Observable<Pelicula[]> {
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
  }
  getPeliculas2():Observable<any>{
   return this.http.get(this.URLSUG1,{headers: this.httpHeader} )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
