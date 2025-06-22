import { memo } from "react";
import type { Pokemon } from "@types/pokemon";

const ListCard = memo(function ListCard({ id, name, sprites }: Pokemon) {
  const image =
    sprites.other?.["official-artwork"]?.front_default || sprites.front_default;
  return (
    <div className="group bg-slate-800 flex flex-col justify-center items-center rounded-md gap-6 p-6 h-full border-1 border-slate-600 transition-all duration-300 ease-in-out hover:bg-slate-700">
      <img
        className="p-6 rounded-full bg-black/25 grayscale transition-all duration-300 ease-in-out max-w-[8rem] group-hover:grayscale-0 group-hover:scale-115"
        src={image}
        alt={name}
        loading="lazy"
      />
      <h3 className="font-start capitalize text-slate-100 transition-all duration-300 ease-in-out group-hover:scale-115">
        #{id.toString().padStart(3, "0")} {name.replace("-", " ")}
      </h3>
    </div>
  );
});

export default ListCard;
