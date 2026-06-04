'use client'
import {useRouter,useSearchParams} from "next/navigation";
import {IMoviesGeneral} from "@/src/app/modules/movieModules/IMoviesGeneral";
import {FC} from "react";

type PropsType = {
    meta:IMoviesGeneral
    basePath:string
}

const Pagination:FC<PropsType> = ({meta,basePath}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')?? 1)

    const changePage = (newPage:number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page',newPage.toString())
            router.push(`${basePath}?${params.toString()}`)
    }

    const totalPages = Math.min(Number(meta?.total_pages) || 1,500)
    return (
        <div>
            <button onClick={()=>{

                if(currentPage > 1){
                    changePage(currentPage-1)
            }}}>
                prev
            </button>
            <p>{currentPage} / {totalPages}</p>
            <button onClick={()=> {

                if(currentPage < totalPages){
                   changePage(currentPage+1)
            }}}>next</button>

        </div>
    );
};

export default Pagination;