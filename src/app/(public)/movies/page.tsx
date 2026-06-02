import {getMovies} from "@/src/app/services/movieServices";


const MoviesPage = async () => {

    const movies = await getMovies(5);
    console.log(movies);
    return (
        <div>
            {
                movies.results.map((movie) => (<div key={movie.id}>{movie.title}</div>))
            }
        </div>
    );
};

export default MoviesPage;