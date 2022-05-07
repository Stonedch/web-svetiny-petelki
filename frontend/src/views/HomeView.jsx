import React from 'react';
import { Layout } from 'components/Layout';
import { About } from 'components/sections/About';
import { Comments } from 'components/sections/Comments';
import { Feedback } from 'components/sections/Feedback';

const HomeView = () => {
    return (
        <Layout>
            <About />
            <Comments />
            <Feedback />
        </Layout>
    );
};

export { HomeView };
