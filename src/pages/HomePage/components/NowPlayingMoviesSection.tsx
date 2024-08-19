import { SwiperProps } from "swiper/react";
import { MovieSlideList } from "./slidersConfig/MovieSlideList";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";

export const NowPlayingMoviesSection = () => {
  const { movies } = useNowPlayingMovies();

  const options: SwiperProps = {
    loop: true,
    pagination: true,
    slidesPerView: 1,
    autoFocus: true,
    
  };

  return (
    <div className="banner-gradient flex flex-col w-full rounded-md border-b-2 border-effectSecondary">
      <p className="text-xl w-full font-bold p-4 break-words">
        LANÇAMENTOS
      </p>
      <div className="flex overflow-hidden flex-1 justify-center items-center max-w-fit w-full">
        <MovieSlideList customOptions={options} movies={movies || []} />
      </div>
    </div>
  );
};
