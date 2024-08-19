import { useGendersMovies } from "../hooks/useGendersMovies"
import { MovieSlideGenres } from "./slidersConfig/MovieSlideGenres"


export const GenresMoviesSection = () => {

    const {genres} = useGendersMovies()
    
    return (
        <div className="banner-gradient flex flex-col w-full rounded-md border-b-2 border-effectSecondary">
      <p className="text-xl text-center w-full font-bold p-4 rounded-t-md break-words">
        GÊNEROS
      </p>
      <div className="flex overflow-hidden text-center w-full">
        <MovieSlideGenres genres={genres || []} />
      </div>
    </div>
    )
    
}