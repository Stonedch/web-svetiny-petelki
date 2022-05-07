import React from 'react';
import { Layout } from 'components/Layout';
import { About } from 'components/sections/About';
import { Comments } from 'components/sections/Comments';

const HomeView = () => {
    return (
        <Layout>
            <About />
            <Comments />
        </Layout>
    );
};

export { HomeView };
