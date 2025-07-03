import { ErrorPlayerNotFound } from './error-player-not-found';
import { Rank } from './rank';

export interface Player extends ErrorPlayerNotFound {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  rank: Rank;
}
