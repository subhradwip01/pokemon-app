import React from "react";
import useGetPokemons from "../hooks/useGetPokemons";
import Loader from "../components/Loader";
import PokemonCard from "../components/PokemonCard";
import SearchBox from "../components/SearchBox";
import SelectType from "../components/SelectType";
import useSearch from "../hooks/useSearch";

const Home = () => {
  const { pokemons, isLoading, error, onSelectType, selectedType } =
    useGetPokemons();
  const { searchedData, doSearch, setQueryValue, query } = useSearch(pokemons);
  return (
    <div className="flex flex-col items-center gap-3 h-full p-10 justify-center">
      <h1 className="text-[24px] font-bold">
        {!query || query === "" ? "Pokemon Lists" : `Search for: ${query}`}
      </h1>
      <div className="w-full flex justify-between gap-3 flex-wrap">
        <SearchBox
          onChange={setQueryValue}
          onSearch={doSearch}
          queryValue={query}
        />
        <SelectType onSelect={onSelectType} selectedType={selectedType} />
      </div>
      {isLoading ? (
        <div className="flex w-full h-full items-center justify-center">
          <Loader />
        </div>
      ) : (!error && searchedData && searchedData.length != 0) ? (
        <div className="flex-1 flex gap-5 flex-wrap items-center justify-center">
          {searchedData?.map((pokemon, index) => (
            <PokemonCard
              key={`${index}-${pokemon.name}`}
              name={pokemon.name}
              pokemonUrl={pokemon.url}
            />
          ))}
        </div>
      ) : (
        <div className="flex w-full h-full items-center justify-center">
          <p className="font-semibold text-black-900">
            {error ? error : "No pokemon found"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
