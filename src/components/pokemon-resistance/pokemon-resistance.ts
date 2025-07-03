import { Component, input } from '@angular/core';
import { pokemonResistance } from '../../app/services/pokemon-app-api/model/pokemon-resistance';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-resistance',
  imports: [CommonModule],
  templateUrl: './pokemon-resistance.html',
  styleUrl: './pokemon-resistance.css',
})
export class PokemonResistance {
  resistance = input.required<pokemonResistance[] | undefined>();
  getResistanceImage(resistanceName: string) {
    console.log(resistanceName.toLowerCase());
    return `https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/${resistanceName
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')}.png`;
  }
}
