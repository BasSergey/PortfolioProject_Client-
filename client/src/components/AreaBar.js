import React, { useContext } from 'react';
import { Context } from '..';

const AreaBar = () => {
    const { course } = useContext(Context);

    return (
        <div>
            <h3>СФЕРЫ:</h3>
            <div >
                {course.areas.map(area =>
                    <div
                        className='values-filter'
                        key={area.id}
                        onClick={() => course.setSelectedArea(area)}
                        border={area.id === course.selectedArea.id ? 'danger' : 'light'}
                    >
                        {area.name}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AreaBar;