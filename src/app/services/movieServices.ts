import {IMoviesGeneral} from "@/src/app/modules/movieModules/IMoviesGeneral";
import {endpoints} from "@/src/app/constants/endpoints";
import {tmdbFetch} from "@/lib/tmdbFetch";


export const getMovies = async(page:number):Promise<IMoviesGeneral> => {

    const response = await tmdbFetch(endpoints.movies.allMovies(page))
    const movies:IMoviesGeneral = await response.json();
    return movies;
}
