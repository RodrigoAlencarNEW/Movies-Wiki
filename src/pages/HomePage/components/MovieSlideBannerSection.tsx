import { useMovieSlideBanner } from "../hooks/useMovieSlideBanner";
import { MovieSlideBanner } from "./slidersConfig/MovieSlideBanner";
import {SwiperProps} from "swiper/react"

export const MovieSlideBannerSection = () => {
  const { movies } = useMovieSlideBanner();

  const options: SwiperProps = {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    centeredSlides: true,
    loop: true,    
    pagination: true,
    navigation: true,
  };

  return (
    <div className="flex w-full">
      <MovieSlideBanner customOptions={options} movies={movies || []} />
    </div>
  );
};

