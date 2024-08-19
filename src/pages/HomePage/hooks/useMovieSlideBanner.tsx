import { useQuery } from "react-query";
import { queryKeys } from "../../../constants/queryKeys";
import { Movie } from "../../../@types/movie";
import { Axios } from "../../../config/Axios";
import { useGendersMovies } from "./useGendersMovies";

export const useMovieSlideBanner = () => {
  const { getMovieGenres } = useGendersMovies();

  const { data: movies, ...rest } = useQuery<Movie[]>({
    queryKey: queryKeys.slideBannerMovies,
    queryFn: async () => {
      const response = await Axios.get(
        "https://api.themoviedb.org/3/movie/top_rated", {
          params: {
            language: "pt-BR",
          }
        }
      ).then((resp) => resp.data);

      return response.results;
    },
    refetchOnWindowFocus: false,
  });

  const updatedMovies = movies?.map((movie) => {
    return {
      ...movie,
      genres: getMovieGenres(movie.genre_ids),
      banner_url: "https://image.tmdb.org/t/p/original" + movie.backdrop_path,
      poster_url: "https://image.tmdb.org/t/p/original" + movie.poster_path,
    };
  });

  return { movies: updatedMovies, ...rest };
};
