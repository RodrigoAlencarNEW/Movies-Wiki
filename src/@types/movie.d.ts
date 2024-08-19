import { Genres } from "./genres";
import { Production_companies } from "./production_companies";
import { Production_countries } from "./production_countries";

export type Movie = {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path?: string;
  backdrop_path?: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
  overview: string;
  banner_url: string;
  poster_url: string;
  genres?: Genres[];
  imdb_id: string,
  original_language: string,
  popularity: number,
  production_companies: Production_companies[],
  production_countries: Production_countries[],
  runtime: number,
  status: string,
  tagline: string,
};
