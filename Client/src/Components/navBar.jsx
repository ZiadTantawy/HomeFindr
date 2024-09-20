import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const navigate = useNavigate();
    useEffect(() => {
        if (cookies.token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [cookies]);

    const handleLogout = () => {
        removeCookie('token', { path: '/' });
        setIsLoggedIn(false);
        navigate('/login');
    };

    const menuItems = [
        "Home",
        "Search",
        isLoggedIn ? "My Account" : "Login",
        "Buy",
        "Sell",
        "About",
        "Contact Us"
    ];
    return(
        <nav className="bg-neutral-white text-neutral-black p-4 mb-0 drop-shadow-2xl
         z-40">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <button
                        className="sm:hidden text-neutral-black text-2xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                    <div className="ml-2">
                        <Link to="/">
                            <div className="text-primary-200 font-bold text-xl">HomeFindr</div>
                        </Link>
                    </div>
                </div>
                <div className="hidden sm:flex gap-10">
                    <Link to="/" className="text-neutral-black font-medium hover:text-primary-100">
                        Home
                    </Link>
                    <Link to="#" className="text-neutral-black font-medium hover:text-primary-100">
                        Search
                    </Link>
                    <Link to="#" className="text-neutral-black font-medium hover:text-primary-100">
                        Buy
                    </Link>
                    <Link to="#" className="text-neutral-black font-medium hover:text-primary-100">
                        Sell
                    </Link>
                    <Link to="#" className="text-neutral-black font-medium hover:text-primary-100">
                        About
                    </Link>
                    <Link to="#" className="text-neutral-black font-medium hover:text-primary-100">
                        Contact Us
                    </Link>
                </div>
                {!isLoggedIn && (
                    <div className="hidden sm:flex items-center gap-3">
                        <Link
                            to="/login"
                            className="bg-primary-200 text-neutral-white font-bold py-2 px-4 rounded-lg hover:bg-primary-100"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="bg-primary-200 text-neutral-white font-bold py-2 px-4 rounded-lg hover:bg-primary-100"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
                {isLoggedIn && (
                    <div className="hidden sm:flex items-center gap-3">
                        <Link
                            to="/profile"
                            className="bg-primary-200 text-neutral-black font-bold py-2 px-4 rounded-lg hover:bg-primary-100"
                        >
                            Profile
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="bg-primary-200 text-neutral-black font-bold py-2 px-4 rounded-lg hover:bg-primary-100"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
            <>
                {isMenuOpen && (
                    <div className="sm:hidden mt-4">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item === 'Login' ? '/login' : item === 'Home' ? '/' : '/'}
                                className="block text-neutral-black py-2 hover:text-primary-100"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                )}
            </>
        </nav>
    );
}