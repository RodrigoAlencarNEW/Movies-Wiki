import { useQuery } from "react-query";
import { queryKeys } from "../../../constants/queryKeys";
import { Axios } from "../../../config/Axios";
import { Movie } from "../../../@types/movie";

export const useTopRatedMovies = () => {
  const { data: movies, ...rest } = useQuery<Movie[]>({
    queryKey: queryKeys.topRatedMovies,
    queryFn: async () => {
      const response = await Axios.get(
        "https://api.themoviedb.org/3/movie/top_rated", {
          params: {
            language: "pt-BR",
          }
        }
      ).then((resp) => resp.data);

      const moviesFromApi = response.results.map((movie: Movie) => {
        return {
          ...movie,
          banner_url:
            "https://image.tmdb.org/t/p/original" + movie.backdrop_path,
          poster_url: "https://image.tmdb.org/t/p/original" + movie.poster_path,
        };
      });

      return moviesFromApi;
    },
    refetchOnWindowFocus: false,
  });

  return { movies, ...rest };
};
