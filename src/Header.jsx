import React, { useContext, useState } from 'react';
import Moon from './assets/icons/moon.svg';
import Sun from './assets/icons/sun.svg';
import Logo from './assets/logo.svg';
import Ring from './assets/ring.svg';
import ShopingCart from './assets/shopping-cart.svg';
import CartDetails from './cine/CartDetails';
import { MovieContext, ThemeContext } from './context';
export default function Header() {
    const [showCart, setShowCart] = useState(false);
    const { cartData } = useContext(MovieContext)
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    return (
        <header>
            {showCart && <CartDetails cartData={cartData} onClose={() => setShowCart(false)} />}
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={Logo} width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={Ring} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            <img src={darkMode ? Sun : Moon} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <a onClick={() => setShowCart(true)} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={ShopingCart} width="24" height="24" alt="" />
                            {
                                cartData.length > 0 && (
                                    <span className='rounded absolute top[-12px] left[-28px] bg-[#12CF6F]  text-white text-center w-[30px] h-[30px] p-[2px]'>{cartData.length}</span>
                                )
                            }
                        </a>

                    </li>
                </ul>
            </nav>
        </header>
    )
}
