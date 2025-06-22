import { memo } from "react";
import { usePokemon } from "@hooks/index";

const Details = memo(function Details({ name }: { name: string }) {
  const { data: pokemon, isLoading, error } = usePokemon({ name });
  const image =
    pokemon?.sprites.other?.["official-artwork"]?.front_default ||
    pokemon?.sprites.front_default;

  return pokemon ? (
    <div className="flex flex-col justify-center items-center gap-8 md:flex-row">
      <img src={image} alt={pokemon.name} />

      <div className="flex-1 bg-slate-800 flex flex-col rounded-md gap-6 p-6 h-full border-1 border-slate-600">
        <h1 className="font-start capitalize text-slate-100">
          #{pokemon.id.toString().padStart(3, "0")}{" "}
          {pokemon.name.replace("-", " ")}
        </h1>

        <div>
          <h3 className="font-inter font-bold text-slate-100">
            Types:
          </h3>
          <ul>
            {pokemon.types.map((type) => (
              <li
                key={type.type.name}
                className="font-inter capitalize text-slate-100"
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-inter font-bold text-slate-100">
            Base stats:
          </h3>
          <ul>
            {pokemon.stats.map((stat) => (
              <li
                key={stat.stat.name}
                className="font-inter capitalize text-slate-100"
              >
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-inter text-slate-100">
            <strong>Height:</strong> {pokemon.height.toFixed(1)} m
          </p>
          <p className="font-inter text-slate-100">
            <strong>Weight:</strong> {pokemon.weight.toFixed(1)} kg
          </p>
        </div>

        <div>
          <h3 className="font-inter font-bold text-slate-100">
            Abilities:
          </h3>
          <ul>
            {pokemon.abilities.map((ability) => (
              <li
                key={ability.ability.name}
                className="font-inter capitalize text-slate-100"
              >
                {ability.ability.name}
                {ability.is_hidden && " (Hidden Ability)"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : null;
});

export default Details;
