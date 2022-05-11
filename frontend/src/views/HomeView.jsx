import React from 'react';
import { Layout } from 'components/Layout';
import { About } from 'components/sections/About';
import { Comments } from 'components/sections/Comments';
import { Feedback } from 'components/sections/Feedback';
import { Title } from 'components/sections/Title';
import { Questions } from 'components/sections/Questions';

const HomeView = () => {
    return (
        <Layout>
            <Title />
            <About />
            <Comments />
            <Questions />
            <Feedback />
        </Layout>
    );
};

export { HomeView };
