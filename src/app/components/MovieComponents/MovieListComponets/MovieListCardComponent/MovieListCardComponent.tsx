
import {FC} from "react";
import {IMovie} from "@/src/app/modules/movieModules/IMovie";
import {posterURL} from "@/src/app/constants/constants";
import {IGenre} from "@/src/app/modules/genreModules/IGenres";
import GenreBadgeComponent from "@/src/app/components/BadgeComponents/BadgeComponent";
import Link from "next/link";
import StarsComponent from "@/src/app/components/StarsComponents/StarsComponent";
import './movieCard.css'


type PropsType = {
    movie:IMovie,
    genres:IGenre[],
}
const MovieListCardComponent:FC<PropsType> = ({movie,genres}) => {

    const poster = `${posterURL}${movie.poster_path}`
    const movieGenres = genres.filter(genre => movie.genre_ids.includes(genre.id))


    return (
        <div className='wrapperCard'>
            <Link href={`/movies/${movie.id}`} className='click-container movieCard'>
                {
                    movie.poster_path ? (<img src={poster} alt="Movie's Poster"/>):
                    (<div className='missingPoster'>&#39;Poster to film missing&#39;</div>)}
                <h3 className='movieCardTitle'>{movie.title}</h3>
                <p className='movieCardOverview'>{movie.overview}</p>
                <StarsComponent rating={movie.vote_average}/>
            </Link>

            <div className='containerForPadges badgeCard'>
                {movieGenres.map(movieGenre =>
                    (<GenreBadgeComponent genreID={movieGenre.id} name={movieGenre.name} key={movieGenre.id}/>))}
            </div>

        </div>
    );
};

export default MovieListCardComponent;