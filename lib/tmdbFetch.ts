
import {accessToken, baseURL} from "@/src/app/constants/constants";


export const tmdbFetch = async (path: string) => {

    const response = await fetch(`${baseURL}${path}`,{
        headers:{
            Authorization: `Bearer ${accessToken}`,
        },
        next:{revalidate:0}
    })
    if(!response.ok){
        throw new Error(`TMDB error: ${response.status}`);
    }


    return response;
}