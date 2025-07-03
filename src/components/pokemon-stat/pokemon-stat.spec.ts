import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStat } from './pokemon-stat';

describe('PokemonStat', () => {
  let component: PokemonStat;
  let fixture: ComponentFixture<PokemonStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonStat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonStat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
