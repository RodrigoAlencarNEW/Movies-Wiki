import { useNowPlayingMovies } from "../../HomePage/hooks/useNowPlayingMovies";
import { useTopRatedMovies } from "../../HomePage/hooks/useTopRatedMovies";
import { useUpComingMovies } from "../../HomePage/hooks/useUpComingMovies";

type useFindMovieProps = {
  filter?: string;
};

export const useFindMovie = ({ filter }: useFindMovieProps) => {
  const { movies: topRatedMovies = [] } = useTopRatedMovies();
  const { movies: upcomingMovies = [] } = useUpComingMovies();
  const { movies: nowPlayingMovies = [] } = useNowPlayingMovies();

  const allMovies = [...topRatedMovies, ...upcomingMovies, ...nowPlayingMovies];

  const currentMovie = allMovies.find(
    (movie) => movie.id.toString() === filter
  );

  return {currentMovie};
};
