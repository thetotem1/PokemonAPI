import {Component} from '@angular/core';
import {PokemonService} from './services/pokemon.service';
import {Pokemon, PokemonDetails, PokemonResult, PokemonTypes} from '../shared/models/pokemon.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-pokemon',
  templateUrl: './main-pokemon.component.html',
  styleUrls: ['./main-pokemon.component.scss']
})
export class MainPokemonComponent {
  pokemonResult!: PokemonResult;
  pokemonDetail!: PokemonDetails;
  pokemonTypes!: PokemonTypes;
  showDetails = false;
  isShiny = false;
  currentIndex = 0; // Tracks the selected Pokémon index

  isFlipped = false; // Tracks the flip state

  frontSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'; // Replace with actual front sprite URL
  backSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'; // Replace with actual back sprite URL


  constructor(private _pokemonService: PokemonService) {
    this.getPokemons('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
  }

  getPokemons(url: string): void {
    this._pokemonService.getPokemons(url).subscribe({
      next: (result: PokemonResult) => {
        this.pokemonResult = result;
        this.currentIndex = 0; // Reset index when fetching new Pokémon data
        result.results.forEach(pokemon => {
          this.setSimplePokemonImage(pokemon.url, pokemon);
        })
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getPokemon(index: number): void {
    const pokemon = this.pokemonResult.results[index];
    this._pokemonService.getPokemon(pokemon.url).subscribe({
      next: (details: PokemonDetails) => {
        this.pokemonDetail = details;
        this.showDetails = true;
        this.isShiny = false;

        // Update currentIndex to center the clicked Pokémon
        this.currentIndex = Math.min(
          Math.max(index, 0),
          this.pokemonResult.results.length - 1
        );

        this.pokemonDetail.typesIcon = [];
        for (let type of this.pokemonDetail.types) {
          this._pokemonService.getTypeIcon(type.type.url).subscribe((t) => {
            this.pokemonDetail.typesIcon.push(t?.sprites?.['generation-viii']?.['legends-arceus']?.name_icon);
          })
        }

        this.pokemonDetail.pokemonDescription = '';

        this._pokemonService.getDescription(this.pokemonDetail.species?.url).subscribe((s: any) => {
          const flavorTextEntry = s?.flavor_text_entries?.find((entry: any) => entry.version.name === 'gold');
          this.pokemonDetail.pokemonDescription = flavorTextEntry?.flavor_text || 'No description available.';
        });

        console.log(this.pokemonDetail)
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  // getTypes(name: string): void  {
  //   const type: PokemonTypes = this.pokemonDetail.types[name];
  // }

  getDisplayedPokemons(): any[] {
    // Dynamically calculate the 3 Pokémon to display
    const start = Math.max(this.currentIndex - 1, 0);
    const end = Math.min(start + 3, this.pokemonResult.results.length);
    return this.pokemonResult.results.slice(start, end);
  }

  toggleShiny(): void {
    this.isShiny = !this.isShiny;
  }

  setSimplePokemonImage(url: string, pokemon: Pokemon): void{
    this._pokemonService.getPokemon(pokemon.url).subscribe({
      next: (pokemonDetail: PokemonDetails) => {
        pokemon.simplePokemonImage = pokemonDetail.sprites.other.dream_world.front_default;
      },
      error: (error: Error) => {
        console.log(error);
        return null;
      }
    })
  }

  toggleFlip(): void {
    this.isFlipped = !this.isFlipped; // Toggle the flip state
  }
}
