import React from 'react';
import { useNavigate } from "react-router-dom"
import { COURSE_ROUTE, REACT_APP_API_URL } from '../utils/consts';

const CourseItem = ({ course }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='card' onClick={() => navigate(COURSE_ROUTE + '/' + course.id)}
                style={{ backgroundImage: `url(${REACT_APP_API_URL + course.img}) ` }}
            >
                <div className='card-content'>
                    <p className='card-title'>{course.name}</p>
                    <span className='card-subtitle'></span>
                    <p className='card-description'></p>
                </div>
            </div>
        </>
    );
};

export default CourseItem;