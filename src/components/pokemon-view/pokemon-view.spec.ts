import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonView } from './pokemon-view';

describe('PokemonView', () => {
  let component: PokemonView;
  let fixture: ComponentFixture<PokemonView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
