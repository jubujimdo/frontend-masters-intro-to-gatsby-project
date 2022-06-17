import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function IndexPage(){
    return (
        <Layout title='About this site' description='This is the about page'>
            <h1>About this site</h1>
            <Link to="/">Back to Home</Link>
        </Layout>
    );
}