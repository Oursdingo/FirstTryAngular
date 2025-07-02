import { PokemonNameEvolution } from './pokemon-evolution';
import { PokemonMega } from './pokemon-mega';

export interface PokemonEvolutionWrapper {
  pre: PokemonNameEvolution;
  next: PokemonNameEvolution;
  mega: PokemonMega;
}
