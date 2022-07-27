import React, { useContext } from 'react';
import { Context } from '../index'
import * as GrIcons from 'react-icons/gr'

const TypeBar = () => {
    const { course } = useContext(Context)

    return (
        <div className='type-bar'>
            <h3 className='values-filter__header'>ТИПЫ:</h3>
            {course.types.map(type =>
                <div
                    className='values-filter'
                    active={type.id === course.setSelectedType.id}
                    key={type.id}
                    onClick={() => {
                        course.setSelectedType(type);
                        alert('isSelected') /* не забыть убрать*/
                        course.courses.filter(course => course.type == type)
                        course.setCourses(course.courses);
                    }}

                >
                    {type.name}
                    {/* <span>
                        <GrIcons.GrStatusGood />
                    </span> */}
                </div>)}
        </div>
    );
};

export default TypeBar;