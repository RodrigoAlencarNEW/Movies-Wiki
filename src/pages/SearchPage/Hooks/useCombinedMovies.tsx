import { useEffect, useState } from "react";
import { useNowPlayingMovies } from "../../HomePage/hooks/useNowPlayingMovies";
import { useTopRatedMovies } from "../../HomePage/hooks/useTopRatedMovies";
import { useUpComingMovies } from "../../HomePage/hooks/useUpComingMovies";
import { useGendersMovies } from "../../HomePage/hooks/useGendersMovies";

type UseCombinedMoviesProps = {
  filter?: string;
};

export const useCombinedMovies = ({ filter }: UseCombinedMoviesProps) => {
  const { getMovieGenres } = useGendersMovies();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { movies: upcomingMovies = [] } = useUpComingMovies();
  const { movies: popularMovies = [] } = useNowPlayingMovies();
  const { movies: topRatedMovies = [] } = useTopRatedMovies();

  useEffect(() => {
    setIsLoading(true);

    if (upcomingMovies && popularMovies && topRatedMovies) {
      setIsLoading(false);
    }
  }, [upcomingMovies, popularMovies, topRatedMovies]);

  const combinedMovies = [
    ...upcomingMovies,
    ...popularMovies,
    ...topRatedMovies,
  ];

  const addedIds: number[] = [];

  const combinedUniqueMovies = combinedMovies.filter((movie) => {
    const isAdded = addedIds.includes(movie.id);
    let isSearchMatch = false;

    const genres = getMovieGenres(movie.genre_ids);

    if (movie.title.toLowerCase().includes(filter?.toLowerCase() || "")) {
      isSearchMatch = true;
    }

    if (
      genres?.find((genre) =>
        genre.name?.toLowerCase().includes(filter?.toLowerCase() || "")
      ) 
    ) {
      isSearchMatch = true;
    }

    if (isAdded || !isSearchMatch) return false;

    addedIds.push(movie.id);

    return true;
  });

  const genresMovies = combinedUniqueMovies.map((movie) => {
    return {
      ...movie,
      genres: getMovieGenres(movie.genre_ids),
    };
  });

  return { movies: genresMovies, isLoading };
};
