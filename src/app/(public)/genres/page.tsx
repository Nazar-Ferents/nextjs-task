import {getGenres} from "@/src/app/services/genreService";
import GenreListComponent from "@/src/app/components/GenreListComponents/GenreListComponent";

const GenresPage = async() => {

    const {genres} = await getGenres();
    return (
        <div className='main-container'>
            <div className='moviesGrid'>
                {
                    genres.map((genre) => (<GenreListComponent key={genre.id} genre={genre}/>))
                }
            </div>

        </div>
    );
};

export default GenresPage;