import { InfoCircleOutlined, StarFilled } from "@ant-design/icons";
import { Modal, ConfigProvider } from "antd";
import { useState } from "react";
import { Movie } from "../../../../@types/movie";
import { Link } from "react-router-dom";

type MovieListModalProps = {
  movie?: Movie;
};

export const MovieListModal = ({ movie }: MovieListModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <span
        onClick={showModal}
        className="w-full h-full flex flex-col items-center justify-center text-[10rem] gap-6 text-primary">
        <InfoCircleOutlined />
        <p className="text-[1rem] font-bold flex">Mais informações</p>
      </span>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "#273a73",
              headerBg: "transparent",
            },
          },
        }}>
        <Modal
          width={500}
          open={isModalOpen}
          closeIcon={null}
          footer={false}
          className="relative overflow-hidden h-fit rounded-lg"
          onCancel={showModal}
          onOk={showModal}
          //design
        >
          <div className="flex justify-center items-center flex-col">
            <img
              className="w-full h-full rounded-b-lg absolute z-0 object-cover opacity-40"
              src={movie?.banner_url}
              alt={movie?.title}
            />
            <div className="w-full absolute flex top-[60%] justify-end p-4 h-fit bg-slate-800 z-15">
              <div className="w-1/2 justify-center flex-col h-fit text-white p-2 flex">
                <p className="flex w-full break-words text-3xl font-bold">
                  {movie?.title}
                </p>
                <p className="opacity-80 text-md">{movie?.release_date}</p>
                <div className="flex gap-2 flex-1 flex-wrap">
                  {movie?.genres?.sort().map((genre) => (
                    <p
                      key={genre.id}
                      className="text-sm mt-1 rounded-full border px-2 p-1 border-effectPrimary/80">
                      {genre.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="z-20 flex gap-6 w-full h-full">
              <div className="relative flex-1">
                <img
                  className="h-[40rem] rounded w-auto object-cover shadow-xl z-20"
                  src={movie?.poster_url}
                  alt=""
                />
                <span className="w-fit items-center flex absolute bg-effectPrimary/80 rounded-l-2xl p-2 gap-2 right-0 top-5">
                  <StarFilled className="text-yellow-300 text-[2rem]" />
                  <p className="font-bold text-white">
                    {movie?.vote_average.toFixed(1)}
                  </p>
                  <p className="bg-red-200"></p>
                </span>
                <Link to={`/movies/${movie?.id}`}>
                  <span className="w-full cursor-pointer absolute flex group items-center hover:bg-[#4167CF] transition-all delay-75 justify-center bottom-0 rounded-t-full h-10 bg-[#4167CF]/90">
                    <p className="text-white/90 group-hover:text-white capitalize">
                      Mais informações
                    </p>
                  </span>
                </Link>
              </div>
              <div className="py-2 gap-2 flex flex-1 max-h-[20rem] flex-col">
                <p className="text-lg text-white font-bold break-words">
                  Sinopse:
                </p>
                <p className="text-sm text-white/80 py-2 pr-2 overflow-y-auto">
                  {movie?.overview}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
};
