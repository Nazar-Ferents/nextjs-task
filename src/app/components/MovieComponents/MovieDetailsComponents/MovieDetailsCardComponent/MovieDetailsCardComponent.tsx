import {MovieDetailsPropsType} from "@/src/app/modules/movieModules/MovieDetailsPropsType";
import {FC} from "react";
import {posterURL} from "@/src/app/constants/constants";

const MovieDetailsCardComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {

    const poster = `${posterURL}${movieDetails.poster_path}`
    return (
        <div>
            {movieDetails.poster_path?
                (<img src={poster} alt={movieDetails.title}/>) :
                (<div>&#39;Poster to film missing&#39;</div>)
            }
            <div>

            </div>

        </div>
    );
};

export default MovieDetailsCardComponent;