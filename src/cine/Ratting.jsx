import React from 'react'
import Star from '../assets/star.svg'
export default function Ratting({ value }) {
    const stars = Array(value).fill(Star)
    return (
        <>
            {stars.map(item => <img src={item} alt="" />)}
        </>
    )
}
