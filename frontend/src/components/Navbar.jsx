import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    N17 Fit
                </div>
                <div className="flex space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
                    <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
                </div>
                <div className="flex items-center">
                    <button className="text-gray-300 hover:text-white">
                        Toggle Dark/Light Mode
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;