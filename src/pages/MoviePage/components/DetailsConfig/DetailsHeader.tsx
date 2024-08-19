import { Divider, Skeleton } from "antd";
import { Movie } from "../../../../@types/movie";
import { Link, useParams } from "react-router-dom";
import { useDetailsMovie } from "../../hooks/useDetailsMovie";

type DetailsHeaderProps = {
  movieDetails?: Movie;
};

export const DetailsHeader = ({ movieDetails }: DetailsHeaderProps) => {
  const { id } = useParams();
  const { isLoading } = useDetailsMovie({ id: id, enabled: false });

  return (
    <>
      {isLoading && <Skeleton active />}
      {!isLoading && (
        <>
          <div className="flex flex-col gap-1">
            <p className="text-5xl break-words ">{movieDetails?.title}</p>
            <p className="text-xl text-gray-400">{movieDetails?.tagline}</p>
          </div>
          <div className="flex gap-2">
            {movieDetails?.genres?.map((genre) => (
              <Link to={`/search?query=${genre.name}`}>
                <p
                  className="text-md hover:opacity-100 opacity-90 hover:border-gray-300 transition-all delay-75 mt-1 rounded-full border px-3 p-2 border-effectPrimary/80"
                  key={genre.id}>
                  {genre.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 pb-2">
            <p className="text-2xl text-gray-400">{movieDetails?.overview}</p>
          </div>
          <Divider className="bg-slate-600" />
        </>
      )}
    </>
  );
};
