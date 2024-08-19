
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { SwiperProps } from "swiper/react";
import { MovieSlideList } from "./slidersConfig/MovieSlideList";

export const TopRatedMoviesSection = () => {
  const { movies } = useTopRatedMovies();

  const options: SwiperProps = {
    pagination: true,
  };

  return (
    <div className="banner-gradient flex flex-col w-full flex-1 rounded-md border-b-2 border-effectSecondary">
      <p className="text-xl w-full font-bold p-4 break-words">
        MAIS VOTADOS
      </p>
      <div className="flex overflow-hidden justify-center items-center flex-1">
        <MovieSlideList customOptions={options} movies={movies || []} />
      </div>
    </div>
  );
};
