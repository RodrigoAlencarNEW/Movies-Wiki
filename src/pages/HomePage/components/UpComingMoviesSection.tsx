import { useUpComingMovies } from "../hooks/useUpComingMovies";
import { MovieSlideList } from "./slidersConfig/MovieSlideList";

export const UpComingMoviesSection = () => {
  const { movies } = useUpComingMovies();

  const options = {
    pagination: true,
    
    
  };

  return (
    <div className="banner-gradient flex flex-col w-full rounded-md border-b-2 border-effectSecondary">
      <p className="text-xl w-full flex font-bold p-4 break-words">
        EM BREVE
      </p>
      <div className="flex overflow-hidden flex-1 justify-center items-center max-w-fit w-full">
        <MovieSlideList customOptions={options} movies={movies || []} />
      </div>
    </div>
  );
};
