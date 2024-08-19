import { MovieList } from "./MovieList";

type MoviesSectionType = {
  search?: string
}

export const MoviesSection = ({search}: MoviesSectionType) => {
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <div className="flex gap-4 text-primary text-2xl">
        {search && <p>Resultados para: <span className="font-bold text-[#4167CF]">{search}</span></p>}
      </div>
      <MovieList search={search} />
    </div>
  );
};
