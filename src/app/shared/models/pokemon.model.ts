export interface PokemonResult {
  count: number ;
  next?: string | null;
  previous?: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
  simplePokemonImage: string;
}

export interface PokemonSprites {
  other: {
    dream_world: {
      front_default: string;
    };
    'official-artwork': {
      front_default: string;
      front_shiny: string;
    };
  };
}


export interface PokemonTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonTypes[];
  typesIcon: string[];
  species: PokemonSpecies;
  pokemonDescription: string;
}
