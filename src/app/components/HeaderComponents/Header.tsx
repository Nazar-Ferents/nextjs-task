import Link from "next/link";

const Header = () => {
    return (
        <header>
            <ul>
                <li><Link href={'/movies'}>Movies</Link></li>
                <li><Link href={'/genres'}>Genres</Link></li>
                <li><Link href={'/search'}>Search</Link></li>
            </ul>
        </header>
    );
};

export default Header;