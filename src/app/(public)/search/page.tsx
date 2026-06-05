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
    if (movies.results.length === 0) return <div>No Movies found</div>
    return (
        <div className='main-container'>

            <MoviesListComponent data={movies}/>
            <Pagination meta={movies} basePath={'/search'}/>
        </div>
    );
};

export default SearchResultPage;