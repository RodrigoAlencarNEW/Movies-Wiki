import { GenresMoviesSection } from "./components/GenresMoviesSection";
import { MovieSlideBannerSection } from "./components/MovieSlideBannerSection";
import { NowPlayingMoviesSection } from "./components/NowPlayingMoviesSection";

import { TopRatedMoviesSection } from "./components/TopRatedMoviesSection";
import { UpComingMoviesSection } from "./components/UpComingMoviesSection";

const HomePage: React.FC = () => {
  return (
    <div className="text-primary flex flex-1 h-fit w-full flex-col">
      
      <div className="banner-gradient w-full h-full mb-2 flex justify-center">
        <MovieSlideBannerSection />
      </div>

      <div className="flex flex-1 sm:flex-row p-2 gap-2 justify-between">
        <div className="max-w-[80%] gap-6 flex-1 flex flex-col">
          <TopRatedMoviesSection />
          <UpComingMoviesSection />
          <NowPlayingMoviesSection />
        </div>

        <div className="w-full flex-1 flex flex-col">
          <GenresMoviesSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
