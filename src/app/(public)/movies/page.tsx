import {FC} from "react";
import {getMovies} from "@/src/app/services/movieService";
import {getGenres} from "@/src/app/services/genreService";
import MovieListCardComponent from "@/src/app/components/MovieComponents/MovieListComponets/MovieListCardComponent/MovieListCardComponent";

type PropsType = {
    searchParams: Promise<{[key:string]:string | string[] | undefined}>
}
const MoviesPage:FC<PropsType> = async ({searchParams}) => {

    const params = await searchParams

    const page = Number(params.pg || 1)

    const {results:movies} = await getMovies(page);
    const {genres} = await getGenres();
    return (
        <div>
            {
                movies.map((movie) => (<MovieListCardComponent key={movie.id} movie={movie} genres={genres} />))
            }
        </div>
    );
};


export default MoviesPage;