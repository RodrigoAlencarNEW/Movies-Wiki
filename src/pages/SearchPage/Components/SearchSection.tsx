import { FaSearch } from "react-icons/fa";
import { MoviesSection } from "./searchConfig/MoviesSection";
import { PrimaryButton } from "../../../components/PrimaryButton";
import { useSearchParams } from "react-router-dom";
import { useGendersMovies } from "../../HomePage/hooks/useGendersMovies";
import { Divider } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const SearchSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { genres } = useGendersMovies();
  const search = searchParams.get("query") || "";

  const handleSearch = (query: string) => {
    setSearchParams({
      query: query,
    });
  };

  const handleClear = () => {
    searchParams.delete("query");
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="flex max-w-[40rem] mb-4 px-6 p-4 w-full rounded-xl bg-[#4167CF] justify-center items-center ">
        <input
          className="text-primary w-full flex bg-transparent outline-none text-lg"
          type="text"
          value={search}
          placeholder="Pesquise um filme ou gênero"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <PrimaryButton className="flex items-center justify-center">
          {!search && <FaSearch className="text-primary" />}
          {search && (
            <DeleteOutlined
              onClick={() => handleClear()}
              className="text-primary"
            />
          )}
        </PrimaryButton>
      </div>
      <div className="flex justify-center flex-wrap gap-2 mt-2 w-full max-w-[70rem]">
        {genres?.map((genre) => (
          <div
            className={`text-center transition-all duration-200 opacity-80 hover:opacity-100 capitalize rounded-full cursor-pointer px-2 p-1 break-words ${
              search.toLowerCase() === genre.name.toLowerCase()
                ? "bg-[#4167CF] opacity-100"
                : ""
            }`}
            key={genre.id}
            onClick={() => handleSearch(genre.name)}>
            {genre.name}
          </div>
        ))}
      </div>
      <Divider className="bg-[#4167CF]/50" />
      <MoviesSection search={search} />
    </>
  );
};
