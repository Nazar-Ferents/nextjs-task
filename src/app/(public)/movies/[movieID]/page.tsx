import {FC} from "react";
import {getMoviesByID} from "@/src/app/services/movieByIDService";
import MovieDetailsCardComponent from "@/src/app/components/MovieComponents/MovieDetailsComponents/MovieDetailsCardComponent/MovieDetailsCardComponent";

type PropsType = {
    params: Promise<{[key:string]:string | string[] | undefined}>
}
const MovieDetailsPage:FC<PropsType> = async ({params}) => {

    const movieID = Number((await params).movieID)

    if (Number.isNaN(movieID)){
        throw new Error('Invalid movie id')
    }
    const movie = await getMoviesByID(movieID)
    return (
        <div>
                <MovieDetailsCardComponent movieDetails={movie}/>
        </div>
    );
};

export default MovieDetailsPage;