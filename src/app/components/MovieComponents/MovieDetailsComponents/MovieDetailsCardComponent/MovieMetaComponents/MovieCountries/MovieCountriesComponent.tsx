import {MovieDetailsPropsType} from "@/src/app/modules/movieModules/MovieDetailsPropsType";
import {FC} from "react";

const MovieCountriesComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    return (
        <div className='gridForInfo'>
             <p>countries: </p>
            <p>{movieDetails.production_countries.map(
                (country) => country.name).join(", ")}</p>
        </div>
    );
};

export default MovieCountriesComponent;