import {IMoviesGeneral} from "@/src/app/modules/movieModules/IMoviesGeneral";
import {tmdbFetch} from "@/lib/tmdbFetch";
import {endpoints} from "@/src/app/constants/endpoints";


export const movieByGenresService = async (
    {genreID,page}:{genreID:number,page:number}):Promise<IMoviesGeneral> =>{

    const response = await tmdbFetch(endpoints.movies.allMoviesByGenre({genreID,page}));
    return await response.json();
}