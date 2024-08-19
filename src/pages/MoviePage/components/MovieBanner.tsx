import { useState } from "react";
import { Movie } from "../../../@types/movie";
import { Spin } from "antd";

type MovieSlideProps = {
    currentMovie?: Movie
}

export const MovieBanner = ({currentMovie}: MovieSlideProps) => {
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true)
  
  const handleImage = () => {
    setIsLoadingImage(false)
  }
  
  return (
    <>
      <div className="h-[23rem] relative">

        {isLoadingImage && <Spin className="w-full h-full items-center flex justify-center bg-slate-800" />}

        <img
          className={`object-cover ${isLoadingImage ? "w-0 h-0" : " w-full h-full"}`}
          src={currentMovie?.banner_url}
          alt={currentMovie?.title}
          onLoad={handleImage}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </>
  );
};
