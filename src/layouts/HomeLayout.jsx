import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import Header from '../components/Header';
import Drawer from '../components/Drawer';
import Footer from '../components/Footer';

const HomeLayout = () => {
    const sliderData = useLoaderData();

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                {/* slider */}
                <section>
                    <Drawer sliderData={sliderData}></Drawer>
                </section>
                {/* changeable */}
                <section>
                    <Outlet></Outlet>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;