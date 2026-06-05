import {MovieDetailsPropsType} from "@/src/app/modules/movieModules/MovieDetailsPropsType";
import {FC} from "react";
import {posterURL} from "@/src/app/constants/constants";
import MovieHeaderComponent from "@/src/app/components/MovieComponents/MovieDetailsComponents/MovieDetailsCardComponent/MovieHeader/MovieHeaderComponent";
import MovieMetaComponent from "@/src/app/components/MovieComponents/MovieDetailsComponents/MovieDetailsCardComponent/MovieMetaComponents/MovieMeta/MovieMetaComponent";
import './MovieDetailsCard.css'

const MovieDetailsCardComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {

    const poster = `${posterURL}${movieDetails.poster_path}`
    return (
        <div className='movieInfo'>
            {movieDetails.poster_path?
                (<img src={poster} alt={movieDetails.title} className='posterInMovieDetails'/>) :
                (<div className='missingPoster'>&#39;Poster to film missing&#39;</div>)
            }
            <div className='movieInfoCard'>
                      <MovieHeaderComponent movieDetails={movieDetails}/>
                      <MovieMetaComponent movieDetails={movieDetails}/>
            </div>

        </div>
    );
};

export default MovieDetailsCardComponent;