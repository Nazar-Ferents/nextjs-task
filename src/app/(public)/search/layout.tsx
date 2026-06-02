import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Search Result Page',
}
type Props = { children: React.ReactNode }
const SearchResultLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default SearchResultLayout;