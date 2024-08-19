import { SwiperProps, SwiperSlide } from "swiper/react";
import { Movie } from "../../../../@types/movie";
import SliderDinamic from "../../../../hooks/SliderDinamic";
import { ReviewButton } from "../../../../components/ReviewButton";
import { Link } from "react-router-dom";

type MovieSlideBannerProps = {
  movies: Movie[];
  customOptions?: SwiperProps;
};

export const MovieSlideBanner = ({
  movies,
  customOptions,
}: MovieSlideBannerProps) => {
  const options = {
    ...customOptions,
  };

  return (
    <SliderDinamic
      className="overflow-hidden transition-all duration-1000"
      options={options}>
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="flex items-center relative justify-center h-full">
            <div className="relative w-full">
              <div className="flex absolute z-30 items-center justify-center w-full h-full">
                <div className="shadow-lg shadow-bgPrimary/50 flex">
                  <div className="flex">
                    <img
                      className="w-auto rounded-l-md h-[40rem]"
                      src={movie.poster_url}
                      alt={movie.title}
                    />
                  </div>

                  <div className="flex flex-col rounded-r-md h-[40rem] w-fit p-6 bg-black/20">
                    <div className="ml-2 flex relative flex-col gap-6 h-full w-full">
                      {/* title decoration */}
                      <span className="flex w-fit flex-col space-y-0">
                        <p className="text-[3rem] break-words w-[40rem] font-bold">
                          {movie.title}
                        </p>
                        <p className="text-[1rem] text-primary/60">
                          Release {movie.release_date}
                        </p>
                      </span>

                      {/* overview decoration */}
                      <span className="flex flex-col">
                        <p className="break-words text-[2rem] text-primary/90">
                          Overview
                        </p>
                        <p className="break-words text-primary/70 w-[40rem]">
                          {movie.overview}
                        </p>

                        <div className="flex gap-2 mt-2">
                          {movie.genres?.map((genre) => (
                            <div
                              key={genre.id}
                              className="outline outline-1 outline-effectSecondary/50 px-2 rounded-full">
                              {genre.name}
                            </div>
                          ))}
                        </div>
                      </span>

                      {/* genres and votes decoration */}

                      <Link to={`/movies/${movie?.id}`}>
                        <ReviewButton>More</ReviewButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* background */}
              <img
                src={movie.banner_url}
                alt={movie.title}
                className="w-full h-fit z-10 blur-sm object-contain shadow-lg"
              />
              <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b z-20 from-transparent to-black" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </SliderDinamic>
  );
};
