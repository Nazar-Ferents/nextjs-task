
import {FC} from "react";
import {IMovie} from "@/src/app/modules/movieModules/IMovie";
import {posterURL} from "@/src/app/constants/constants";
import {IGenre} from "@/src/app/modules/genreModules/IGenres";
import GenreBadgeComponent from "@/src/app/components/BadgeComponents/BadgeComponent";
import Link from "next/link";
import StarsComponent from "@/src/app/components/StarsComponents/StarsComponent";


type PropsType = {
    movie:IMovie,
    genres:IGenre[],
}
const MovieListCardComponent:FC<PropsType> = ({movie,genres}) => {

    const poster = `${posterURL}${movie.poster_path}`
    const movieGenres = genres.filter(genre => movie.genre_ids.includes(genre.id))


    return (
        <div>
            <Link href={`/movies/${movie.id}`}>
                {
                    movie.poster_path ? (<img src={poster} alt="Movie's Poster"/>):
                    (<div>I&#39;mPoster to film missingI&#39;m</div>)}
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <StarsComponent rating={movie.vote_average}/>
            </Link>

                    <div>
                        {movieGenres.map(movieGenre => (<GenreBadgeComponent genreID={movieGenre.id} name={movieGenre.name} key={movieGenre.id}/>))}
                    </div>

        </div>
    );
};

export default MovieListCardComponent;