import React, { useEffect, useState } from 'react'
import { getPokemons, getPokemonsByType } from '../api/endPointes';
import { useSearchParams } from 'react-router-dom';

const useGetPokemons = (limit = 50) => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [selectedType, setSelectedType] = useState("");
    const [searchParams, setSearchparams] = useSearchParams();
    const getAllPokemons = async () => {
        setIsLoading(true);
        try {
            const data = await getPokemons(limit);
            setPokemons(data.results);
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }
    console.log(isLoading);
    useEffect(() => {
        const type = searchParams.get('type');
        if (type) {
            onSelectType(type);
        } else {
            getAllPokemons();
        }
    }, [])

    const onSelectType = async (type) => {
        setSelectedType(type);
        setSearchparams({ type: type })
        if (type === "") {
            getAllPokemons();
            return;
        }
        setIsLoading(true);
        try {
            const data = await getPokemonsByType(type);
            const result = data.pokemon.map(pokemonInfo => pokemonInfo.pokemon);
            setPokemons(result);
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        pokemons,
        isLoading,
        error,
        selectedType,
        onSelectType
    }
}

export default useGetPokemons
