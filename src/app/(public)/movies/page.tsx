import {getMovies} from "@/src/app/services/movieServices";


const MoviesPage = async () => {

    const movies = await getMovies(1);
    return (
        <div>
            {
                movies.results.map(movie => (<div key={movie.id}>{movie.title}</div>))
            }
        </div>
    );
};

export default MoviesPage;