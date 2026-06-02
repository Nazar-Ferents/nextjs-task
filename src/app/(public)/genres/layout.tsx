import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'GenresPage'
}
type Props = { children: React.ReactNode }
const GenresPageLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default GenresPageLayout;