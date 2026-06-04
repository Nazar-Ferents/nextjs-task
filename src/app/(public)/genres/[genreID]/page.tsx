import {FC} from "react";
import {movieByGenresService} from "@/src/app/services/movieByGenresService";
import MoviesListComponent from "@/src/app/components/MovieComponents/MovieListComponets/MoviesListComponent/MoviesListComponent";
import Pagination from "@/src/app/components/PaginationComponents/pagination";

type PropsType = {
    searchParams: Promise<{[key:string]:string | string[] | undefined}>
    params: Promise<{[key:string]:string | string[] | undefined}>
}
const MoviesByGenresPage:FC<PropsType> = async ({params,searchParams}) => {

    const genreID = Number((await params).genreID)
    const page = Number((await searchParams).page || 1)
    const movies = await movieByGenresService({genreID,page})

    return (
        <div>
            <Pagination meta={movies} basePath={`/genres/${genreID}`}/>
            <MoviesListComponent data={movies}/>
        </div>
    );
};

export default MoviesByGenresPage;