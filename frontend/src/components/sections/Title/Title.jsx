import React from 'react';
import styles from './Title.module.scss';

const Title = () => {
    return (
        <section class='text-gray-600 px-5 py-8'>
            <div class='container mx-auto flex flex-col text-center w-full'>
                <h2 class='text-xs text-pink-400 tracking-widest font-medium mb-1 uppercase'>
                    ROOF PARTY POLAROID
                </h2>
                <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                    Master Cleanse Reliac Heirloom
                </h1>
                <p class='lg:w-2/3 mx-auto leading-relaxed text-base'>
                    Whatever cardigan tote bag tumblr hexagon brooklyn
                    asymmetrical gentrify, subway tile poke farm-to-table.
                    Franzen you probably haven't heard of them man bun deep
                    jianbing selfies heirloom prism food truck ugh squid
                    celiac humblebrag.
                </p>
            </div>
        </section>
    );
};

export { Title };
