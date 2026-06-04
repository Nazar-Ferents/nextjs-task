import {tmdbFetch} from "@/lib/tmdbFetch";
import {endpoints} from "@/src/app/constants/endpoints";
import {IMovieDetails} from "@/src/app/modules/movieModules/IMovieDetails";


export const getMoviesByID = async (movieID:number):Promise<IMovieDetails> => {

    const response = await tmdbFetch(endpoints.movies.movieByID(movieID));
    return await response.json();
}