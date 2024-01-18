import axios from 'axios';

interface PokemonResult {
  url: string;
}

export const getTypes = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/type/');

  return response.data.results.map((type: { name: string }) => type.name);
};

export const getPokemonList = async (page: number, limit: number) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${page * limit}&limit=${limit}`);

  if (Array.isArray(response.data.results)) {
    const pokemonDataPromises = response.data.results.map((result: PokemonResult) => {
      return axios.get(result.url).then((res) => res.data);
    });

    return Promise.all(pokemonDataPromises);
    // eslint-disable-next-line no-else-return
  } else {
    throw new Error('Invalid data format received.');
  }
};

export const getPokemonByType = async (type: string) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}/`);
    const pokemonDataPromises = response.data.pokemon.map((pokemon: { pokemon: PokemonResult }) => {
      return axios.get(pokemon.pokemon.url).then((res) => res.data);
    });

    return Promise.all(pokemonDataPromises);
  } catch (error) {
    throw new Error('Invalid data format received.');
  }
};

export const checkPokemonArrayType = async (type: string) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}/`);

    if (response.data.pokemon && Array.isArray(response.data.pokemon) && response.data
      .pokemon.length > 0) {
      return true;
    // eslint-disable-next-line padded-blocks, no-else-return
    } else {
      return false;
    }
  } catch (error) {
    throw new Error('Invalid data format received.');
  }
};
