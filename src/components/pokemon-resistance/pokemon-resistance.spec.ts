import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonResistance } from './pokemon-resistance';

describe('PokemonResistance', () => {
  let component: PokemonResistance;
  let fixture: ComponentFixture<PokemonResistance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonResistance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonResistance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
