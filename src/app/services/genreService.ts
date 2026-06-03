import {endpoints} from "@/src/app/constants/endpoints";
import {tmdbFetch} from "@/lib/tmdbFetch";
import {IGenres} from "@/src/app/modules/genreModules/IGenres";


export const getGenres = async():Promise<IGenres> => {

    const response = await tmdbFetch(endpoints.movies.allGenres)
    return  await response.json();
}