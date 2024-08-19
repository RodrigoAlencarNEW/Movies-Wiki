import { Spin } from "antd";

const BannerLoading = () => {
  return (
    <div className="bg-slate-800 grid items-center h-[23rem]">
      <Spin />
    </div>
  );
};

const PosterLoading = () => {
  return (
    <div className="bg-slate-800 grid items-center w-full rounded-xl max-w-[25rem] h-[35rem]">
      <Spin />
    </div>
  );
};

const InformationsLoading = () => {
  return (
    <div className="bg-slate-800 w-full rounded-xl p-4">
      <div className="animate-pulse bg-white w-full h-8 max-w-[28rem] rounded-full"></div>
      <div className="animate-pulse bg-white/30 w-full h-4  max-w-[14rem] mt-2 rounded-full"></div>
      <div className="flex mt-6 gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-white/30 w-full h-7  max-w-[8rem] mt-2 rounded-full"></div>
        ))}
      </div>
      <div className="animate-pulse bg-white w-full h-6 mt-6  max-w-[14rem] rounded-full"></div>
      <div className="animate-pulse bg-white/30 w-full h-4 mt-2 rounded-full"></div>
      <div className="animate-pulse bg-white/30 w-full h-4 mt-2 rounded-full"></div>
      <div className="animate-pulse bg-white/30 w-full h-4 mt-2 rounded-full"></div>
      <div className="animate-pulse bg-white/30 w-full max-w-[50rem] h-4 mt-2 rounded-full"></div>

      <div className="flex mt-6 w-full gap-4">
        <div className="flex w-full flex-col gap-4">
          {Array.from({ length: 4 }).map((_,index) => (
            <div key={index} className="animate-pulse bg-white w-full h-6 max-w-[10rem] rounded-full"></div>
          ))}
        </div>
        <div className="flex w-full flex-col gap-4">
          {Array.from({ length: 4 }).map((_,index) => (
            <div key={index} className="animate-pulse bg-white w-full h-6 max-w-[10rem] rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Loading = () => {
  return (
    <div className="gap-2 flex flex-col">
      <BannerLoading />

      <div className="p-4 flex gap-4">
        <PosterLoading />
        <InformationsLoading />
      </div>
    </div>
  );
};
