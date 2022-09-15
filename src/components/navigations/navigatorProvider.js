import React from 'react';
import { Routes, Route } from 'react-router'

import firebase, { FirebaseContext } from '../../configs/firebase';

import Orders from '../../pages/orders/orders';
import NewDish from '../../pages/new-dish/newDish';
import Menu from '../../pages/menu/menu';
import Sidebar from '../ui/Sidebar';

function NavigatorProvider()
{
    return(
        <FirebaseContext.Provider
            value={{ firebase }}
        >
            <div className="md:flex min-h-screen">
                <Sidebar />

                <div className="md:w-3/5 xl:w-4/5 p-6">
                    <Routes>
                        <Route path="/" element={<Orders />} />
                        <Route path="/new-dish" element={<NewDish />} />
                        <Route path="/menu" element={<Menu />} />
                    </Routes>
                </div>
            </div>
        </FirebaseContext.Provider>
    )
}

export default NavigatorProvider;

