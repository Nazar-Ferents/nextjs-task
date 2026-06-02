import {IMoviesGeneral} from "@/src/app/modules/movieModules/IMoviesGeneral";

import {accessToken, baseURL} from "@/src/app/constants/constants";
import {endpoints} from "@/src/app/constants/endpoints";


export const getMovies = async(page:number):Promise<IMoviesGeneral> => {

    const movies:IMoviesGeneral = await fetch(`${baseURL}${endpoints.movies.allMovies(page)}`,{
        headers:{
            Authorization: `Bearer ${accessToken}`,
            accept: 'application/json'
        },
        next:{revalidate:60}
    })
        .then(response => response.json())
    return movies;
}
