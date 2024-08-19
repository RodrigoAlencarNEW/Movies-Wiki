import { useQuery } from "react-query";
import { queryKeys } from "../../../constants/queryKeys";
import { Axios } from "../../../config/Axios";
import { Genres } from "../../../@types/genres";

export const useGendersMovies = () => {
  const { data: genres, ...rest } = useQuery<Genres[]>({
    queryKey: queryKeys.gendersMovies,
    queryFn: async () => {
      const response = await Axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        {
          params: {
            language: "pt-BR",
          },
        }
      ).then((resp) => resp.data);

      return response.genres;
    },
    refetchOnWindowFocus: false,
  });

  const getMovieGenres = (ids: number[]) => {
    const moviesGenres = genres?.filter((genre) => {
      return ids.includes(genre.id);
    });

    return moviesGenres;
  };

  return { genres, getMovieGenres, ...rest };
};
