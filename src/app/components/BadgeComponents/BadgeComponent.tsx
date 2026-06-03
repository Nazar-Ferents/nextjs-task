import {FC} from "react";
import Link from "next/link";

type PropsType = {
    genreID:number,
    name:string
}
const GenreBadgeComponent:FC<PropsType> = ({genreID,name}) => {
    return (
        <Link href={`/genres/${genreID}`}>
            {name}
        </Link>
    );
};

export default GenreBadgeComponent;