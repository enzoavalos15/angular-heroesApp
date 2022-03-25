import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {

  heroesUrl: string = environment.apiUrl + '/heroes';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.heroesUrl);
  }

  getHeroePorId( id:string ):Observable<Heroe>{
    return this.http.get<Heroe>(`${ this.heroesUrl }/${ id }`);
  }

  getSugerencias( termino:string ):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.heroesUrl }?q=${ termino }&_limit=6`);
  }
}
