import {IMoviesGeneral} from "@/src/app/modules/movieModules/IMoviesGeneral";
import {tmdbFetch} from "@/lib/tmdbFetch";
import {endpoints} from "@/src/app/constants/endpoints";


export const searchMovie = async (
    {title,page}:{title:string,page:number}):Promise<IMoviesGeneral> => {

    const response = await tmdbFetch(endpoints.movies.searchMovies({title,page}))
    return  await response.json();


}