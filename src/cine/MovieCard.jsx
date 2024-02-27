import React, { useContext, useState } from 'react';
import Tag from '../assets/tag.svg';
import { MovieContext } from '../context';
import { getImageUrl } from '../utility/cine-utility';
import MovieDetailsModal from './MovieDetailsModal';
import Ratting from './Ratting';

export default function MovieCard({ movie }) {

    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSeletedMovie] = useState(null);

    // const { cartData, setCartData } = useContext(MovieContext);
    const { state, dispatch } = useContext(MovieContext);

    function handleShowModal() {
        setShowModal(true)
    }

    function handleAddToCart(e, movie) {
        e.stopPropagation();

        const found = state.cartData.find((item) => item.id === movie.id);

        if (!found) {
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    ...movie
                }
            })
        } else {
            console.error(`${movie.title} already added to cart`);
        }
    }


    return (
        <>
            {showModal && <MovieDetailsModal movie={movie} addToCart={handleAddToCart} onClose={() => setShowModal(false)} />}
            <figure onClick={handleShowModal} className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img className="w-full object-cover" src={getImageUrl(movie.cover)} alt={movie.title} />
                <figcaption className="pt-4">
                    <h3 className="text-xl mb-1">{movie.title}</h3>
                    <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                    <div className="flex items-center space-x-1 mb-5">
                        <Ratting value={movie.rating} />
                    </div>
                    <a className=" bg-green-400 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        href="#"
                        onClick={(e) => handleAddToCart(e, movie)}>
                        <img src={Tag} alt="" />
                        <span>${movie.price} | Add to Cart</span>
                    </a>
                </figcaption>
            </figure>
        </>
    )
}
