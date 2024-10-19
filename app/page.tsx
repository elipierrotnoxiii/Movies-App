
import apiFetch from "./lib/apiFetch";
import MovieList from "./components/MovieList";
import { FC } from "react";
import { serverParams } from "./types";
import Paginations from "./components/Paginations";

const Home: FC<serverParams> = async ({ searchParams }) => {

  console.log('searchParams :>> ', searchParams);
  const page = searchParams.page || "1";

  

  const getMovies = await apiFetch.getMovies({searchParams})

  return (
  <main className="md:container mx-auto pt-5">
      <h1 className="text-center text-3xl font-bold uppercase">Awsome Movies</h1>
      <MovieList movies={getMovies}/>
      <div className="flex flex-col items-center pb-28">
        <Paginations pages={getMovies.total_pages > 500 ? 500 : getMovies.total_pages} page={Number(page)}/>
      </div>
  </main>
  );
}

export default Home;