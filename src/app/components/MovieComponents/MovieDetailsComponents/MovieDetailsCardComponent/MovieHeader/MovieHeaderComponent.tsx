import {MovieDetailsPropsType} from "@/src/app/modules/movieModules/MovieDetailsPropsType";
import {FC} from "react";
import './movieHeader.css'

const MovieHeaderComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    return (
        <div className='movieTitle'>
            <p>{movieDetails.status}</p>
            <h1>{movieDetails.title}</h1>
            {movieDetails.tagline && <p className='quote'>&#39;{movieDetails.tagline}&#39;</p>}
            {movieDetails.vote_average > 0 && <p className='rate'>{movieDetails.vote_average.toFixed(1)}</p>}
        </div>
    );
};

export default MovieHeaderComponent;