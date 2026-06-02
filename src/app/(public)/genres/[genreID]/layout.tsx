import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Movies by Genres',
}
type Props = { children: React.ReactNode }
const MoviesByGenresLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default MoviesByGenresLayout;