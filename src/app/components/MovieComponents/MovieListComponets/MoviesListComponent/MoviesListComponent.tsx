import {getMovies} from "@/src/app/services/movieService";
import MovieListCardComponent from "@/src/app/components/MovieComponents/MovieListComponets/MovieListCardComponent/MovieListCardComponent";
import {getGenres} from "@/src/app/services/genreService";

const MoviesListComponent = async () => {

    const {results:movies} = await getMovies(1);
    const {genres} = await getGenres();
    return (
        <div>
            {
                movies.map((movie) => (<MovieListCardComponent key={movie.id} movie={movie} genres={genres} />))
            }
        </div>
    );
};

export default MoviesListComponent;