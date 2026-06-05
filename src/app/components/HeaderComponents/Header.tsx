import Link from "next/link";
import SearchComponent from "@/src/app/components/SearchComponent/SearchComponent";
import UserComponent from "@/src/app/components/UserComponents/UserComponent";
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <Link href={'/movies'} className='link'>Movies List</Link>
               <Link href={'/genres'} className='link'>Genres List</Link>

            <SearchComponent/>
            <UserComponent/>
        </header>
    );
};

export default Header;