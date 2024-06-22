import React, { useEffect, useState } from 'react'
import { getPokemonDetails } from '../api/endPointes';

const useGetPokemonDetails = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState({});
  const [error, setError] = useState();
  useEffect(() => {
    const getPokemonInformation = async () => {
      try {
        setIsLoading(true);
        const res = await getPokemonDetails(id);
        setPokemonData(res);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getPokemonInformation();
  }, [id])
  return {
    isLoading,
    error,
    pokemonData
  }
}

export default useGetPokemonDetails;