import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Movies Page',
}
type Props = { children: React.ReactNode }
const MoviesPageLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default MoviesPageLayout;