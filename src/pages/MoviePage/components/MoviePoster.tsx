import { useState } from "react";
import { Movie } from "../../../@types/movie";
import { StarFilled } from "@ant-design/icons";
import { Spin } from "antd";

type MoviePosterProps = {
  currentMovie?: Movie;
};

export const MoviePoster = ({ currentMovie }: MoviePosterProps) => {
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);

  const handleImage = () => {
    setIsLoadingImage(false);
  };

  return (
    <>
      <div className="flex w-fit relative flex-col gap-2 text-white justify-center">
        {isLoadingImage && (
          <Spin className="h-[40rem] w-[25rem] bg-slate-800 rounded-xl flex items-center justify-center"></Spin>
        )}

        <>
          <img
            className="w-full max-w-[25rem] h-[40rem] rounded-xl shadow-2xl object-cover"
            src={currentMovie?.poster_url}
            alt={currentMovie?.title}
            onLoad={handleImage}
          />
          <div className="bg-slate-800 gap-1 absolute flex items-center top-0 right-0 p-2 rounded-l-lg">
            <StarFilled className="text-yellow-500" />
            <p>{currentMovie?.vote_average.toFixed(1)}</p>
          </div>
        </>

        <span className="bg-slate-800 w-full p-2 rounded-lg"></span>
      </div>
    </>
  );
};
