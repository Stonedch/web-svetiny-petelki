import { NotFound } from 'components/NotFound';
import React from 'react';
import FailImg from 'assets/images/fail.png';
import { Navbar } from 'components/Header/Navbar';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export const NotFond = () => {
  return (
    <>
        <Navbar />
        <Header />
        <NotFound />
        <Footer />
    </>
  )
}

