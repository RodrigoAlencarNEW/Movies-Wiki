import { Link } from "react-router-dom";
import { Genres } from "../../../../@types/genres";

type MovieSlideGenresProps = {
  genres: Genres[];
};

export const MovieSlideGenres = ({ genres }: MovieSlideGenresProps) => {
  return (
    <>
      <div className="flex-wrap grid grid-cols-2 justify-center w-full p-2 gap-2">
        {genres.map((genre) => (
          <Link to={`/search?query=${genre.name}`}>
            <div
              key={genre.id}
              className="flex-1 cursor-pointer opacity-80 hover:opacity-100 transition-all duration-500 hover:border-primary border-b-2 rounded-md border-effectSecondary flex">
              <p className="p-2 break-words text-center text-sm w-full">
                {genre.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
