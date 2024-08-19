import { useQuery } from "react-query"
import { queryKeys } from "../../../constants/queryKeys"
import { Movie } from "../../../@types/movie"
import { Axios } from "../../../config/Axios"
import { fakeInterval } from "../../../helper/fakeInterval"

type useDetailsMovieProps = {
    id?: string,
    enabled?: boolean,
}

export const useDetailsMovie = ({id, enabled = true}: useDetailsMovieProps) => {
    const {data: movieDetails, ...rest} = useQuery<Movie>({
        queryKey: [queryKeys.detailsMovie, id],
        queryFn: async () => {
            await fakeInterval(500)
            const response = await Axios.get(
              `https://api.themoviedb.org/3/movie/${id}`, {
                params: {
                  language: "pt-BR",
                }
              }
            ).then((resp) => resp.data);
      
            return response
          },
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          enabled: enabled,
        });       
        
        return { movieDetails, ...rest };
      };