import {FC} from "react";
import Link from "next/link";
import './genresBadge.css'

type PropsType = {
    genreID:number,
    name:string
}
const GenreBadgeComponent:FC<PropsType> = ({genreID,name}) => {
    return (
        <Link href={`/genres/${genreID}`} className='badge'>
            {name}
        </Link>
    );
};

export default GenreBadgeComponent;