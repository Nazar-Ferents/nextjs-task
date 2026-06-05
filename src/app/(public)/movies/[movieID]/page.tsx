import {FC} from "react";
import {getMoviesByID} from "@/src/app/services/movieByIDService";
import MovieDetailsCardComponent from "@/src/app/components/MovieComponents/MovieDetailsComponents/MovieDetailsCardComponent/MovieDetailsCard/MovieDetailsCardComponent";
import {backgroundURL, posterURL} from "@/src/app/constants/constants";
import './MovieDetailsPage.css'

type PropsType = {
    params: Promise<{[key:string]:string | string[] | undefined}>
}
const MovieDetailsPage:FC<PropsType> = async ({params}) => {

    const movieID = Number((await params).movieID)

    if (Number.isNaN(movieID)){
        throw new Error('Invalid movie id')
    }
    const movie = await getMoviesByID(movieID)
    const backgroundIMG = movie.backdrop_path ? `${posterURL}${movie.backdrop_path}` : backgroundURL
    return (
        <div className='detailMovie-page' style={{backgroundImage: `url(${backgroundIMG})`}}>
                <MovieDetailsCardComponent movieDetails={movie}/>
        </div>
    );
};

export default MovieDetailsPage;