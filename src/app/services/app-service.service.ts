import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  public getMovieData():Observable<any>{
    return this.http.get('../assets/mock-json/movie-landing.json');
  }

  public searchMovie(data):Observable<any>{
    return this.http.get('../assets/mock-json/search-actormovies.json');
  }
}
