import {FC} from "react";
import {MovieDetailsPropsType} from "@/src/app/modules/movieModules/MovieDetailsPropsType";

const MovieLanguagesComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    return (
        <div className='gridForInfo'>
            <p>languages:</p>
            <p>
                {movieDetails.spoken_languages.map(
                    (language) => language.english_name).join(", ")}
            </p>
        </div>
    );
};

export default MovieLanguagesComponent;