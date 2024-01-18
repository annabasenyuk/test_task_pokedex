import React from 'react';
import { Pokemon } from '../../types/Pokemon';
import { TypesColor } from '../../types/TypesColor';
import './PokemonCard.scss';

interface Props {
  pokemon: Pokemon;
  onClick: (selected: Pokemon) => void;
}

export const PokemonCard: React.FC<Props> = ({ pokemon, onClick }) => {
  const getTypeColor = (type: string): string => {
    return TypesColor[type as keyof typeof TypesColor] || '';
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(pokemon)}
      onKeyPress={(e) => e.key === 'Enter' && onClick(pokemon)}
    >
      <article className="card">
        <img className="card__photo" src={pokemon.sprites.front_default} alt="Pokemon" />
        <h2 className="card__header">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <div className="card__block">
          {pokemon.types.map((pokemons) => (
            <div
              key={pokemons.type.name}
              className="card__title"
              style={{ backgroundColor: getTypeColor(pokemons.type.name) }}
            >
              <span className="card__title_type">
                {pokemons.type.name.charAt(0).toUpperCase() + pokemons.type.name.slice(1)}
              </span>
            </div>

          ))}
        </div>
      </article>
    </div>
  );
};
