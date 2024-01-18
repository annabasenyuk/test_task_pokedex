import React from 'react';
import { Pokemon } from '../../types/Pokemon';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { CardInformation } from '../CardInformation/CardInformation';
import { Button } from '../Button/Button';
import './ContentSection.scss';

interface Props {
  filteredPokemon: Pokemon[];
  errorMsg: string;
  isLoading: boolean;
  loadMore: () => void;
  handleCardClick: (selected: Pokemon) => void;
  selectedPokemon: Pokemon | null;
}

export const ContentSection: React.FC<Props> = ({
  filteredPokemon,
  errorMsg,
  isLoading,
  loadMore,
  handleCardClick,
  selectedPokemon,
}) => (
  <section className="content">
    <div className="content__container">
      {filteredPokemon.length > 0 ? (
        <>
          {filteredPokemon.map((pokemons) => (
            <PokemonCard
              key={pokemons.id}
              pokemon={pokemons}
              onClick={handleCardClick}
            />
          ))}

          {errorMsg && <p className="errorMsg">{errorMsg}</p>}

          {filteredPokemon.length > 0 && (
            <Button
              isLoading={isLoading}
              loadMore={loadMore}
            />
          )}
        </>
      ) : (
        <p className="content__loading">Loading...</p>
      )}
    </div>

    <div className="content__contain">
      {selectedPokemon && (
        <CardInformation selectedPokemon={selectedPokemon} />
      )}
    </div>
  </section>
);
