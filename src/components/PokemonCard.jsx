import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import useGetPokemonDetails from "../hooks/useGetPokemonDetails";
import Loader from "./Loader";

const PokemonCard = ({ pokemonUrl, name }) => {
  const { pokemonData, isLoading } = useGetPokemonDetails(
    pokemonUrl.split("/").reverse()[1]
  );
  return (
    <Link
      to={`${ROUTES.POKEMON_DETAILS}/${pokemonUrl.split("/").reverse()[1]}`}
      state={{
        isComingFromPreviousPage: true
      }}
      className="w-[300px] min-h-[300px] shadow-md space-y-2 bg-white p-3 rounded-md flex flex-col"
    >
      <div className="flex justify-center items-center w-full h-full flex-1">
        {isLoading ? (
          <Loader />
        ) : (
          <img
            src={pokemonData?.sprites?.other["official-artwork"]?.front_default}
            alt={`pokemon-image-${name}`}
            className="w-[200px] h-[230px] object-contain"
          />
        )}{" "}
      </div>
      <p className="text-[16px] font-semibold">{name}</p>
      <p className="text-sky-700">View details</p>
    </Link>
  );
};

export default PokemonCard;
