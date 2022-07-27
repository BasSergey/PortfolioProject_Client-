import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { useParams } from 'react-router-dom'
import { getBasket } from '../http/courseAPI';
import { REACT_APP_API_URL } from '../utils/consts';
import { fetchOneCourse } from "../http/courseAPI";
import NavBar from '../components/NavBar';
const Basket = () => {
    const { course } = useContext(Context)
    useEffect(() => {
        getBasket().then(data => course.setBaskets(data))
    }, [])
    const totalPrice = course.basket.reduce((total, price) => total + price.course.price, 0)
    console.log(totalPrice)

    return (
        <>
            <div className="container">
                <div className='basket'>
                    <h1>Корзина</h1>
                    <br />
                    <div className='row'>
                        <p>Название</p>
                        <p>Цена</p>
                    </div>
                    <br />
                    {course.basket.map((product, index) =>
                        <div className="basket-body" key={index}>
                            <p>{product.course.name} </p>
                            <p>{product.course.price} руб</p>
                        </div>
                    )}
                    <div className='basket_total-price'>
                        <h2>Итого: {totalPrice} руб</h2>
                    </div>
                </div>
                <NavBar />
            </div>
        </>
    )
}

export default Basket