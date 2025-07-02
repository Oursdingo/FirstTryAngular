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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'pokemon-app';
  pokemonData: Pokemon | undefined;
  //pokemonForm: FormGroup; // Ajout de la propriété formGroup
  private pokemonService = inject(PokemonApiService);
  pokemonForm = new FormGroup({
    pokemonName: new FormControl(''),
  });

  onSubmit() {
    const pokemonName = this.pokemonForm.value.pokemonName;
    if (pokemonName) {
      this.pokemonService
        .getPokemonByName(pokemonName)
        .subscribe((response) => {
          if (response.status === 404) {
            console.error('Pokemon not found', pokemonName);
          }
          this.pokemonData = response;
        });
    }
  }
}
