import {FC} from "react";
import Pagination from "@/src/app/components/PaginationComponents/pagination";
import {searchMovie} from "@/src/app/services/searchMovieService";
import MoviesListComponent from "@/src/app/components/MovieComponents/MovieListComponets/MoviesListComponent/MoviesListComponent";

type PropsType = {
    searchParams: Promise<{[key:string]:string | string[] | undefined}>
}
const SearchResultPage:FC<PropsType> = async ({searchParams}) => {

    const params = await searchParams
    const title =  params.title?.toString() || ''
    const page = Number(params.page || 1)

    const movies = await searchMovie({title,page})
    return (
        <div>
            <Pagination meta={movies} basePath={'/search'}/>
            <MoviesListComponent data={movies}/>
        </div>
    );
};

export default SearchResultPage;