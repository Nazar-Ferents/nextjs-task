import MovieListCardComponent from "@/src/app/components/MovieComponents/MovieListComponets/MovieListCardComponent/MovieListCardComponent";
import {FC} from "react";
import {IMoviesGeneral} from "@/src/app/modules/movieModules/IMoviesGeneral";
import {getGenres} from "@/src/app/services/genreService";

type PropsType = {
    data:IMoviesGeneral

}

const MoviesListComponent:FC<PropsType> = async ({data}) => {

    const {genres} = await getGenres();

    return (
        <div className='moviesGrid'>
            {
                data.results.map((movie) => (<MovieListCardComponent key={movie.id} movie={movie} genres={genres} />))
            }
        </div>
    );
};

export default MoviesListComponent;