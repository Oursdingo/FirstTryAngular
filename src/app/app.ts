import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonApiService } from './services/pokemon-app-api/pokemon-api.service';
import { Pokemon } from './services/pokemon-app-api/model/pokemon';
import { Player } from './services/pokemon-app-api/modelPlayer/player';
import { PlayerApiService } from './services/pokemon-app-api/player-api.service';
import { PokemonView } from '../components/pokemon-view/pokemon-view';
import { PokemonStat } from '../components/pokemon-stat/pokemon-stat';
import { PokemonResistance } from '../components/pokemon-resistance/pokemon-resistance';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    PokemonView,
    PokemonStat,
    PokemonResistance,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'pokemon-app';
  pokemonData: Pokemon | undefined;
  dataLoaded = true;
  //pokemonForm: FormGroup; // Ajout de la propriété formGroup
  private pokemonService = inject(PokemonApiService);
  pokemonForm = new FormGroup({
    pokemonName: new FormControl(''),
  });

  private playerService = inject(PlayerApiService);
  playerData: Player | undefined;
  playerForm = new FormGroup({
    playerName: new FormControl(''),
  });
  onExecute() {
    const playerName = this.playerForm.value.playerName;
    if (playerName) {
      this.playerService.getPlayerByName(playerName).subscribe((response) => {
        if (response.status === 404) {
          console.error('Player not found', playerName);
        }
        this.playerData = response;
      });
    }
  }

  onSubmit() {
    const pokemonName = this.pokemonForm.value.pokemonName;
    if (pokemonName) {
      this.pokemonService
        .getPokemonByName(pokemonName)
        .subscribe((response) => {
          if (response.status === 404) {
            console.error('Pokemon not found', pokemonName);
            this.dataLoaded = false;
          }
          this.pokemonData = response;
        });
    }
  }
}
