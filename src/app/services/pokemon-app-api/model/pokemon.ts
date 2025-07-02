import { PokemonName } from './pokemon-name';
import { pokemonSprites } from './pokemon-sprite';
import { pokemonType } from './pokemon-type';
import { PokemonTalent } from './pokemon-talent';
import { pokemonStat } from './pokemon-stat';
import { pokemonResistance } from './pokemon-resistance';
import { PokemonEvolutionWrapper } from './pokemon-evolutionWrapper';
import { PokemonSexe } from './pokemon-sex';
import { PokemonForme } from './pokemon-forme';
import { ErrorPokemonNotFound } from './error-pokemon-not-found';
export interface Pokemon extends ErrorPokemonNotFound {
  pokedex_id: number;
  generation: 1;
  category: string;
  name: PokemonName;
  sprites: pokemonSprites;
  types: pokemonType[];
  talents: PokemonTalent[];
  stats: pokemonStat;
  resistances: pokemonResistance[];
  evolution: PokemonEvolutionWrapper;
  height: string;
  weight: string;
  egg_groups: string[];
  sexe: PokemonSexe;
  catch_rate: number;
  level_100: number;
  formes: PokemonForme;
}
