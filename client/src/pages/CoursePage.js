import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar';
import { fetchOneCourse } from "../http/courseAPI";
import { REACT_APP_API_URL } from '../utils/consts';
import { addToBasket } from "../http/courseAPI";
import { useNavigate } from "react-router-dom"
import * as BsIcons from 'react-icons/bs'
const CoursePage = () => {
    const navigate = useNavigate();
    const [course, setCourse] = useState({ info: [] })
    const { id } = useParams()
    useEffect(() => {
        fetchOneCourse(id).then(data => setCourse(data))
    }, [])
    const add = () => {
        const formData = new FormData()
        formData.append('courseId', id)
        addToBasket(formData).then(response => alert(`Товар ` + course.name + ` был добавлен в вашу корзину!`))
    }
    return (
        <>
            <div className="container course-page">
                    <h1>{course.name}</h1>

                    <div className="row">
                        <img className='course-page__img' src={REACT_APP_API_URL + course.img} />
                        <div>
                            <h2> От: {course.price} руб.</h2>
                            <button className="btn__clickable " onClick={add}>Добавить в корзину</button>
                            <button className="btn__clickable " onClick={() => navigate('/basket')}>
                                Перейти в корзину
                                <span> <BsIcons.BsFillBasket3Fill /></span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <h1>О курсе</h1>
                        {course.info.map((info) =>
                            <div key={info.id}>
                                    <span>{info.title}: {info.description}</span>
                            </div>
                        )}
                    </div>
            </div>
            <NavBar />
        </>
    );
};

export default CoursePage;