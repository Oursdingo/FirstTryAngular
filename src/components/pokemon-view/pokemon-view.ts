import { Component, input } from '@angular/core';
import { Pokemon } from '../../app/services/pokemon-app-api/model/pokemon';
import { PokemonResistance } from '../pokemon-resistance/pokemon-resistance';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-view',
  imports: [PokemonResistance, CommonModule],
  templateUrl: './pokemon-view.html',
  styleUrl: './pokemon-view.css',
})
export class PokemonView {
  pokemon = input.required<Pokemon | undefined>();
}
