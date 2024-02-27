import React from 'react';
import deleteImg from "../assets/delete.svg";
import { getImageUrl } from '../utility/cine-utility';

import { useContext } from 'react';
import { MovieContext } from '../context';

export default function CartDetailsItem({ onClose, cardItem }) {

    const { cartData, setCartData } = useContext(MovieContext)
    function handleDeleteFromCart(e, itemId) {
        e.preventDefault();
        const result = cartData.filter(item => item.id !== itemId)
        setCartData([...result]);
    }
    return (
        <>
            <div
                className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14"
            >
                <div className="grid grid-cols-[1fr_auto] gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            className="rounded overflow-hidden"
                            src={getImageUrl(cardItem.cover)}
                            alt=""
                            width={60}
                        />
                        <div>
                            <h3 className="text-base md:text-xl font-bold">{cardItem.title}</h3>
                            <p className="max-md:text-xs text-[#575A6E]">
                                {cardItem.genre}
                            </p>
                            <span className="max-md:text-xs">${cardItem.price}</span>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                        <button
                            className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                            onClick={(e) => handleDeleteFromCart(e, cardItem.id)}
                        >
                            <img className="w-5 h-5" src={deleteImg} alt="" />
                            <span className="max-md:hidden">Remove</span>
                        </button>
                    </div>
                </div>

            </div>

        </>
    )
}
