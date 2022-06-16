import * as React from 'react';
import { Link } from 'gatsby';

export default function IndexPage(){
    return (
        <main>
            <h1>About this site</h1>
            <Link to="/">Back to Home</Link>
        </main>
    );
}