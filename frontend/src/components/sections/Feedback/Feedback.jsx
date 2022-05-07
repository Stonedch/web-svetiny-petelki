import React from 'react';
import styles from './Feedback.module.scss';

const Feedback = () => {
    return (
        <section className='text-gray-600 body-font relative px-5 py-8'>
            <div className='container mx-auto'>
                <div className='flex flex-col text-center w-full mb-12'>
                    <h2 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                        Contact Us
                    </h2>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        Whatever cardigan tote bag tumblr hexagon brooklyn
                        asymmetrical gentrify.
                    </p>
                </div>
                <div className='lg:w-1/2 md:w-2/3 mx-auto'>
                    <div className='flex flex-wrap -m-2'>
                        <div className='p-2 w-1/2'>
                            <div className='relative'>
                                <label
                                    for='name'
                                    className='leading-7 text-sm text-gray-600'
                                >
                                    Ваше имя
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-200 focus:bg-white focus:ring-2 focus:ring-pink-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                />
                            </div>
                        </div>
                        <div className='p-2 w-1/2'>
                            <div className='relative'>
                                <label
                                    for='phone'
                                    className='leading-7 text-sm text-gray-600'
                                >
                                    Номер телефона
                                </label>
                                <input
                                    type='tel'
                                    id='phone'
                                    name='phone'
                                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-200 focus:bg-white focus:ring-2 focus:ring-pink-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                />
                            </div>
                        </div>
                        <div className='p-2 w-full'>
                            <div className='relative'>
                                <label
                                    for='message'
                                    className='leading-7 text-sm text-gray-600'
                                >
                                    Оставить сообщение
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-200 focus:bg-white focus:ring-2 focus:ring-pink-100 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                                ></textarea>
                            </div>
                        </div>
                        <div className='p-2 w-full'>
                            <button className='flex mx-auto text-dark hover:text-white hover:shadow-lg bg-pink-200 border-0 py-2 px-8 focus:outline-none hover:bg-pink-300 rounded text-lg transition-all duration-300 ease-in-out'>
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Feedback };
