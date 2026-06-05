import {FC} from "react";
import {IGenre} from "@/src/app/modules/genreModules/IGenres";
import Link from "next/link";
import './genresList.css'

type PropsType = {
    genre:IGenre
}
const GenreListComponent:FC<PropsType> = ({genre}) => {
    return (
        <div className='genreCard'>
            <Link href={`/genres/${genre.id}`}>{genre.name}</Link>
        </div>
    );
};

export default GenreListComponent;