import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Player } from './modelPlayer/player';
@Injectable({ providedIn: 'root' })
export class PlayerApiService {
  private http = inject(HttpClient);
  private BASE_URL = 'https://localhost:8080';
  getPlayerByName(name: string) {
    return this.http.get<Player>(`${this.BASE_URL}/players/${name}`);
  }
}
