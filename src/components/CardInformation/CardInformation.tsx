import React from 'react';
import { Pokemon } from '../../types/Pokemon';
import { Information } from '../../types/Information';
import './CardInformation.scss';

interface Props {
  selectedPokemon: Pokemon;
}

const convertToEnum = (name: string): Information | undefined => {
  switch (name) {
    case 'special-attack':
      return Information.specialAttack;
    case 'special-defense':
      return Information.specialDefense;
    default:
      return Information[name as keyof typeof Information];
  }
};

export const CardInformation: React.FC<Props> = ({ selectedPokemon }) => {
  return (
    <article className="container">
      <img className="container__photo" src={selectedPokemon.sprites.front_default} alt="Pokemon" />
      <h2 className="container__header">{selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}</h2>
      <div className="container__block">
        <span className="container__title">Type</span>

        <span className="container__title">
          {selectedPokemon.types.map((pokemons) => pokemons.type.name).join(' ')}
        </span>

        {selectedPokemon.stats.map((pokemons) => (
          <React.Fragment key={pokemons.stat.name}>
            <span className="container__title">{convertToEnum(pokemons.stat.name)}</span>
            <span className="container__title">{pokemons.base_stat}</span>
          </React.Fragment>
        ))}

        <span className="container__title">Weight</span>
        <span className="container__title">{selectedPokemon.weight}</span>

        <span className="container__title">Total moves</span>
        <span className="container__title">{selectedPokemon.moves.length}</span>
      </div>
    </article>
  );
};
