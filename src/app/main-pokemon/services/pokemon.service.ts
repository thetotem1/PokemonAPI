import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonDetails, PokemonResult, PokemonTypes} from '../../shared/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getPokemons(url: string): Observable<PokemonResult> {
    return this.http.get<PokemonResult>(url);
  }

  getPokemon(url: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url);
  }

  getTypeIcon(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getDescription(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
