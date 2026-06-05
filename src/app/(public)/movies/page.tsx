import {FC} from "react";
import {getMovies} from "@/src/app/services/movieService";
import Pagination from "@/src/app/components/PaginationComponents/pagination";
import MoviesListComponent from "@/src/app/components/MovieComponents/MovieListComponets/MoviesListComponent/MoviesListComponent";

type PropsType = {
    searchParams: Promise<{[key:string]:string | string[] | undefined}>
}
const MoviesPage:FC<PropsType> = async ({searchParams}) => {

    const params = await searchParams
    const page = Number(params.page || 1)

    const movies = await getMovies(page);

    return (
        <div className='main-container'>
            <MoviesListComponent data={movies} />
            <Pagination meta={movies} basePath={'/movies'}/>


        </div>
    );
};


export default MoviesPage;