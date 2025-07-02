import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pokemon } from './model/pokemon';
@Injectable({ providedIn: 'root' })
export class PokemonApiService {
  private http = inject(HttpClient);
  private BASE_URL = 'https://tyradex.vercel.app/api/v1';
  getPokemonByName(name: string) {
    return this.http.get<Pokemon>(`${this.BASE_URL}/pokemon/${name}`);
  }
}
