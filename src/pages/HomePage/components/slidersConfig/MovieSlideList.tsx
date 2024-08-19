import { SwiperProps, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa";
import SliderDinamic from "../../../../hooks/SliderDinamic";
import { Movie } from "../../../../@types/movie";
import { Link } from "react-router-dom";

type MovieSlideListProps = {
  movies: Movie[];
  customOptions?: SwiperProps;
};

export const MovieSlideList = ({
  movies,
  customOptions,
}: MovieSlideListProps) => {
  const options: SwiperProps = {
    autoHeight: true,
    loopAdditionalSlides: 1,
    breakpoints: {
      1946: {
        spaceBetween: 10,
        slidesPerView: 10,
      },
      1665: {
        spaceBetween: 10,
        slidesPerView: 8,
      },
      1360: {
        spaceBetween: 10,
        slidesPerView: 6,
      },
      1060: {
        spaceBetween: 10,
        slidesPerView: 4,
      },
      744: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      452: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
    },
    ...customOptions,
  };

  return (
    <>
      <SliderDinamic
        className="flex items-center p-2 justify-center m-auto"
        options={options}>
        {movies.map((movie) => (
          <SwiperSlide className="w-fit relative" key={movie.id}>
            <div className="w-auto relative flex-1 group flex-col">
              <div className="absolute flex shadow-sm opacity-0 items-center rounded-md justify-center group-hover:opacity-100 bg-slate-800/70 flex-col h-full w-full transition-all duration-500">
                <Link to={`movies/${movie.id}`}>
                  <FaPlay className="text-[5rem] w-full cursor-pointer" />
                </Link>
                <p className="text-[2rem] p-2 w-full text-center">Detalhes</p>
              </div>

              <img
                className="w-auto h-[30rem] rounded-md object-cover"
                src={movie.poster_url}
                alt={movie.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </SliderDinamic>
    </>
  );
};
