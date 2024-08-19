import { useParams } from "react-router-dom";
import { useFindMovie } from "./hooks/useFindMovie";
import { useDetailsMovie } from "./hooks/useDetailsMovie";
import { MovieBanner } from "./components/MovieBanner";
import { MoviePoster } from "./components/MoviePoster";
import { MovieDetails } from "./components/MovieDetails";
import { Loading } from "./Loading";

const MoviePage = () => {
  const { id } = useParams();
  const { currentMovie } = useFindMovie({ filter: id });
  const { movieDetails, isLoading } = useDetailsMovie({ id: id });

  if (isLoading) return <Loading />;

  return (
    <div className="w-full">
      <MovieBanner currentMovie={currentMovie} />
      <div className="justify-center mt-6 flex-wrap gap-6 flex w-full">
        <MoviePoster currentMovie={currentMovie} />
        <MovieDetails movieDetails={movieDetails} />
      </div>
    </div>
  );
};

export default MoviePage;
