import { XFilled } from "@ant-design/icons";
import { Movie } from "../../../../@types/movie";

type DetailsInfoProps = {
  movieDetails?: Movie;
};

export const DetailsInfo = ({ movieDetails }: DetailsInfoProps) => {
  return (
    <>
      <div className="grid grid-cols-2">
        {/* Status */}
        <div className="flex items-center gap-1">
          <XFilled className="text-[.5rem] text-effectPrimary" />
          <p className="flex gap-2 font-bold">
            Status:
            <span className="font-normal text-gray-300">
              {movieDetails?.status}
            </span>
          </p>
        </div>
        {/* Estudio */}
        <div className="flex items-center gap-1">
          <XFilled className="text-[.5rem] text-effectPrimary" />
          <div className="flex gap-2 font-bold">
            Estudio:
            <div className="font-normal flex gap-1 ">
              {movieDetails?.production_companies.slice(0, 1).map((comp) => (
                <p key={comp.id} className="text-effectSecondary/80 hover:text-effectPrimary transition-all delay-75 cursor-pointer">
                  {comp.name} - {comp.origin_country}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Duração */}
        <div className="flex items-center gap-1">
          <XFilled className="text-[.5rem] text-effectPrimary" />
          <p className="flex gap-2 font-bold">
            Duração:
            <span className="font-normal text-gray-300">
              {movieDetails?.runtime}
              <span className="text-effectSecondary/80"> minutos</span>
            </span>
          </p>
        </div>
        {/* Estreia */}
        <div className="flex items-center gap-1">
          <XFilled className="text-[.5rem]  text-effectPrimary" />
          <p className="flex gap-2 font-bold">
            Estreia:
            <span className="font-normal text-gray-300">
              {movieDetails?.release_date.slice(0, 4)}
            </span>
          </p>
        </div>
        {/* Popularidade */}
        <div className="flex items-center gap-1">
          <XFilled className="text-[.5rem] text-effectPrimary" />
          <p className="flex gap-2 font-bold">
            Popularidade:
            <span className="font-normal text-gray-300">
              {movieDetails?.popularity}
            </span>
          </p>
        </div>
        {/* Linguagem Original */}
        <div className="flex items-center gap-1">
          <XFilled className="text-[.5rem] text-effectPrimary" />
          <p className="flex gap-2 font-bold">
            Linguagem original:
            <span className="font-normal text-gray-300">
              {movieDetails?.original_language.toUpperCase()}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
