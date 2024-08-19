import { Movie } from "../../../@types/movie";
import { DetailsHeader } from "./DetailsConfig/DetailsHeader";
import { DetailsInfo } from "./DetailsConfig/DetailsInfo";

type MovieDetailsProps = {
  movieDetails?: Movie;
};

export const MovieDetails = ({ movieDetails }: MovieDetailsProps) => {
  return (
    <>
      <div className="flex-1 gap-2 w-full flex flex-col text-white">
        <div className="bg-slate-800 flex gap-6 flex-col flex-1 rounded-lg p-4">
          <DetailsHeader movieDetails={movieDetails} />
          <div className="bg-slate-800 flex flex-col w-full rounded-lg">
            <DetailsInfo movieDetails={movieDetails} />
          </div>
        </div>
      </div>
    </>
  );
};
