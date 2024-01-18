import React, { useState, useEffect } from 'react';
import './App.scss';
import './styles/reset.scss';
import {
  getTypes, getPokemonList, getPokemonByType, checkPokemonArrayType,
} from './api';
import { Pokemon } from './types/Pokemon';
import { Dropdown } from './components/Dropdown/Dropdown';
import { ContentSection } from './components/ContentSection/ContentSection';

export const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleTypeChange = async (type: string | null) => {
    setSelectedType(type);

    try {
      setIsLoading(true);

      if (type !== null) {
        const pokemonByType = await getPokemonByType(type);

        setPokemon(pokemonByType);
      } else {
        const newPokemonData = await getPokemonList(page, 12);

        setPokemon(newPokemonData);
      }

      setErrorMsg('');
    } catch (error) {
      setErrorMsg('Error while loading data. Try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPokemon = selectedType !== null
    ? pokemon.filter((pokemons) => pokemons.types.some((p) => p.type.name === selectedType))
    : pokemon;

  const loadPokemon = async () => {
    try {
      setIsLoading(true);

      const types = await getTypes();

      const typesWithPokemonArray = await Promise.all(
        types.map(async (type: string) => ({
          type,
          hasPokemonArray: await checkPokemonArrayType(type),
        })),
      );

      const filteredTypes = typesWithPokemonArray
        .filter(({ hasPokemonArray }) => hasPokemonArray)
        .map(({ type }) => type);

      setPokemonTypes(filteredTypes);

      const newPokemonData = await getPokemonList(page, 12);

      setPokemon((prevPokemon) => [...prevPokemon, ...newPokemonData]);
      setErrorMsg('');
    } catch (error) {
      setErrorMsg('Error while loading data. Try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPokemon();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleCardClick = (selected: Pokemon) => {
    setSelectedPokemon(selected);
  };

  return (
    <>
      <div className="contain">
        <header className="header">
          <h1 className="header__title">Pokedex</h1>
        </header>

        <Dropdown
          options={pokemonTypes.map((type) => ({ label: type, value: type }))}
          value={selectedType}
          onChange={(type) => handleTypeChange(type)}
          filterByType
          onTypeChange={(type) => handleTypeChange(type)}
        />

        <ContentSection
          filteredPokemon={filteredPokemon}
          errorMsg={errorMsg}
          isLoading={isLoading}
          loadMore={loadMore}
          handleCardClick={handleCardClick}
          selectedPokemon={selectedPokemon}
        />
      </div>
    </>
  );
};
