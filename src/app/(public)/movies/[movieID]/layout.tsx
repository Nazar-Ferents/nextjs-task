import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Movie Details'
}
type Props = { children: React.ReactNode }
const MovieDetailsLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default MovieDetailsLayout;