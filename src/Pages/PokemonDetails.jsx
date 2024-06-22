import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useGetPokemonDetails from "../hooks/useGetPokemonDetails";
import Loader from "../components/Loader";
import ShowDescriptiveInfo from "../components/ShowDescriptiveInfo";
import ShowStatInfo from "../components/ShowStatInfo";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const { pokemonData, isLoading, error } = useGetPokemonDetails(pokemonId);
  const navigate = useNavigate();
  const location = useLocation();
  const backHandler = () => {
    if (location.state && location.state.isComingFromPreviousPage) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3 flex-wrap w-full h-full">
      {isLoading ? (
        <Loader />
      ) : !error ? (
        <>
          <div className="w-full flex gap-2 items-center">
            <Button label={"Back"} onClick={backHandler} />
            <Breadcrumb />
          </div>
          <h1 className="text-[28px] font-semibold capitalize">
            Information of {pokemonData.name}
          </h1>
          <div className="flex gap-10 flex-wrap items-center justify-center">
            <img
              src={pokemonData?.sprites?.other?.home.front_default}
              alt="pokemon-image"
              className="bg-sky-500 rounded-xl min-h-[500px] sm:min-w-[500px]"
            />
            <div className="space-y-2 w-full md:w-[50%]">
              <ShowDescriptiveInfo label="Name" value={pokemonData.name} />
              <ShowDescriptiveInfo label="Height" value={pokemonData?.height} />
              <ShowDescriptiveInfo label="Weight" value={pokemonData?.weight} />
              <ShowDescriptiveInfo
                label="Types"
                value={pokemonData?.types?.map((type) => type.type.name)}
                isMultiple
              />
              <ShowDescriptiveInfo
                label="Some moves"
                value={pokemonData?.moves
                  ?.map((move) => move.move.name)
                  .slice(0, 6)}
                isMultiple
              />
              <ShowDescriptiveInfo
                label="Some abilities"
                value={pokemonData?.abilities
                  ?.map((ability) => ability.ability.name)
                  .slice(0, 6)}
                isMultiple
              />
              <ShowDescriptiveInfo
                label="Forms"
                value={pokemonData?.forms?.map((form) => form.name).slice(0, 6)}
                isMultiple
              />
              <ShowDescriptiveInfo
                label="Base experience"
                value={pokemonData.base_experience}
              />
            </div>
          </div>
          <div className="space-y-2 w-[100%] md:w-[40%]">
            {pokemonData?.stats?.map((stat) => (
              <ShowStatInfo label={stat.stat.name} value={stat.base_stat} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-[14px] font-semibold">{error}</p>
      )}
    </div>
  );
};

export default PokemonDetails;
