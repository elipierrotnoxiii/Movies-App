import { Movies, serverParams, SingleMovie } from "../types"

const {BASE_URL, THMB_TOKEN} = process.env

const apiConfig: RequestInit = {
  headers: {
    Authorization: `Bearer ${THMB_TOKEN}`
  },
  cache: "no-store"
}

interface APIFetch {

  getMovies: ({searchParams}: serverParams) => Promise<Movies>
  getMovie: (id: string) => Promise<SingleMovie>



}

const apiFetch: APIFetch = {
  getMovies: async({searchParams}) => {
    const buildURL = new URL(`${BASE_URL}`);
    const buildParams = new URLSearchParams("");

    if (searchParams.page) {
      buildParams.set("page", searchParams.page);
    }

    if(searchParams.query) {
      buildParams.set("query", searchParams.query);
      buildURL.pathname = buildURL.pathname + "/search/movie";
    } else {
      buildURL.pathname = buildURL.pathname + "/movie/popular";

    }
    
    try {
      const fetchMovies = await fetch(`${buildURL}?${buildParams}`, apiConfig)
      if (fetchMovies.status !== 200) throw new Error("Error Fetching THMD API")

      const results: Movies = await fetchMovies.json();
     
      return results;

    } catch (error) {
      console.log(error);

      return {} as Movies
    }
  },
 getMovie: async id => {

  try {
    const getMovie = await fetch(`${BASE_URL}/movie/${id}`, apiConfig)

    if (getMovie.status !== 200) throw new Error("Error Fetching THMDB API")
    
    const results: SingleMovie = await getMovie.json();
    return results;

  } catch (error) {
    console.log('error :>> ', error);
    return {} as SingleMovie
  }

  
 }
}

export default apiFetch