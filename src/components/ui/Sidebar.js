import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const menuItems = [
        {
            url: "/",
            name: "Ordenes"
        },
        {
            url: "/menu",
            name: "Menu"
        }
    ];

    return ( 
        <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Restaurante app</p>

                <p className="mt-3 text-gray-600">
                    Administra tu restaurant en las siguientes opciones:
                </p>

                <nav className="mt-10">
                    {
                        menuItems.map(navItem => (
                            <NavLink
                                className={ 
                                    (navData) => (navData.isActive ? "text-yellow-500" : 'none text-gray-400') + 
                                    " p-1 block hover:bg-yellow-500 hover:text-gray-900"
                                } 
                                key={navItem.url}
                                exact="true"
                                to={ navItem.url }
                            >
                                { navItem.name }
                            </NavLink>
                        ))
                    }
                </nav>
            </div>
        </div>
    );
}
 
export default Sidebar;