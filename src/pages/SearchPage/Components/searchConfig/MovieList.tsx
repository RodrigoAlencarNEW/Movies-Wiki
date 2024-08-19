import { useState } from "react";
import { useCombinedMovies } from "../../Hooks/useCombinedMovies";
import { Pagination, Spin } from "antd";
import { AntPagination } from "../../../../hooks/AntPagination";
import { MovieListModal } from "./MovieListModal";
import { Movie } from "../../../../@types/movie";

type MovieListType = {
  search?: string;
};

export const MovieList = ({ search }: MovieListType) => {
  const { movies } = useCombinedMovies({ filter: search });
  const [loadingImage, setLoadingImage] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovie, setCurrentMovie] = useState<Movie>();

  const itemsPerPage = 12;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectMovie = (movie: Movie) => {
    setCurrentMovie(movie);
  };

  const handleLoadImage = () => {
    setLoadingImage(false);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const moviesPerPage = movies.slice(startIndex, endIndex);

  return (
    <div className="w-full flex flex-col gap-4">
      <AntPagination>
        <div className="pagination flex mt-4 justify-center">
          <Pagination
            showSizeChanger={false}
            responsive={true}
            current={currentPage}
            total={movies.length}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
            className="p-2"
          />
        </div>
      </AntPagination>

      <ul className=" text-primary grid md:grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-6 p-10">
        {moviesPerPage.map((movie) => (
          <li
            className="flex cursor-pointer flex-col flex-1 basis-[14rem] justify-center text-center flex-wrap"
            key={movie.id}
            title={movie.title}>
            <div className="flex group overflow-hidden w-full relative h-[24rem]">
              {loadingImage && (
                <Spin className="h-full w-full flex justify-center absolute items-center" />
              )}

              <img
                className="w-full h-full group-hover:scale-125 transition-all duration-200 object-cover flex-1"
                src={movie.poster_url}
                alt={movie.title}
                onLoad={handleLoadImage}
              />
              <div
                onClick={() => handleSelectMovie(movie)}
                className="opacity-0 group-hover:opacity-100 bg-gray-900/70 transition-all duration-500 group-hover:block w-full h-full absolute">
                <MovieListModal movie={currentMovie} />
              </div>
            </div>
            <h2 className="mt-2 flex-1 font-bold break-words">{movie.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
