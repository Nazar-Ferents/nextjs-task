import Link from "next/link";
import SearchComponent from "@/src/app/components/SearchComponent/SearchComponent";

const Header = () => {
    return (
        <header>
            <ul>
                <li><Link href={'/movies'}>Movies</Link></li>
                <li><Link href={'/genres'}>Genres</Link></li>
                <li><Link href={'/search'}>Search</Link></li>
            </ul>
            <SearchComponent/>
        </header>
    );
};

export default Header;