import { Component, input } from '@angular/core';
import { Pokemon } from '../../app/services/pokemon-app-api/model/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-stat',
  imports: [CommonModule],
  templateUrl: './pokemon-stat.html',
  styleUrl: './pokemon-stat.css',
})
export class PokemonStat {
  pokemon = input.required<Pokemon | undefined>();
}
