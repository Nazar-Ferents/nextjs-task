import {MovieDetailsPropsType} from "@/src/app/modules/movieModules/MovieDetailsPropsType";
import {FC} from "react";
import MovieCountriesComponent
    from "@/src/app/components/MovieComponents/MovieDetailsComponents/MovieDetailsCardComponent/MovieMetaComponents/MovieCountries/MovieCountriesComponent";
import MovieLanguagesComponent
    from "@/src/app/components/MovieComponents/MovieDetailsComponents/MovieDetailsCardComponent/MovieMetaComponents/MovieLanguages/MovieLanguagesComponent";
import MovieCompaniesComponent
    from "@/src/app/components/MovieComponents/MovieDetailsComponents/MovieDetailsCardComponent/MovieMetaComponents/MovieCompanies/MovieCompaniesComponent";
import GenreBadgeComponent from "@/src/app/components/BadgeComponents/BadgeComponent";
import './MovieMeta.css'

const MovieMetaComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    const hours = Math.floor(movieDetails.runtime / 60)
    const minutes = movieDetails.runtime % 60
    return (
        <div className='infoContainer'>
            {movieDetails.production_countries.length > 0 && <MovieCountriesComponent movieDetails={movieDetails}/>}
            {movieDetails.spoken_languages.length > 0 && <MovieLanguagesComponent movieDetails={movieDetails}/>}

            <div className='gridForInfo'>
                {movieDetails.runtime > 0 && <p>runtime:</p>}
                {movieDetails.runtime > 0 && <p> {hours}h {minutes > 0 && `${minutes}m`}</p>}
                {movieDetails.release_date.length > 0 && <p>release-date: </p>}
                {movieDetails.release_date.length > 0 && <p>
                    {new Date(movieDetails.release_date).toLocaleDateString('en-US',{year:'numeric', month:'long', day:'numeric'
                    })}</p>}
                {movieDetails.budget > 0 &&<p>budget: </p>}
                {movieDetails.budget > 0 && <p>{movieDetails.budget.toLocaleString
                ('en-US',{style:'currency',currency:'USD'})}</p>}
            </div>
            {movieDetails.production_companies.length > 0 && <MovieCompaniesComponent movieDetails={movieDetails}/>}
            {movieDetails.adult && <p>18+</p>}
            {movieDetails.homepage && <a href={movieDetails.homepage} target='_blank'>Home Page</a>}

            <div className='containerForBadges'>
                {movieDetails.genres.map(genre =>
                    (<GenreBadgeComponent genreID={genre.id} name={genre.name} key={genre.id}/>))}
            </div>
            <div className='overviewFull'>
                <p>{movieDetails.overview}</p>
            </div>

        </div>
    );
};

export default MovieMetaComponent;