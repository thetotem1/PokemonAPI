export interface PokemonResult {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonSprites {
  other: {
    'official-artwork': {
      front_default: string;
      front_shiny: string;
    };
  };
}

export interface PokemonDetails {
  id: number;
  name: string;
  sprites: PokemonSprites;
}
