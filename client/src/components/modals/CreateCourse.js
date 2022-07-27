import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../../index";
import { createCourse, fetchAreas, fetchCourses, fetchTypes } from "../../http/courseAPI";
import { observer } from "mobx-react-lite";

const CreateCourse = observer(({ active, setActive }) => {

    const { course } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState()
    const [info, setInfo] = useState([])
    const [selectedType, setSelectedType] = useState(course.types[0]);
    const [selectedArea, setSelectedArea] = useState(course.areas[0]);

    useEffect(() => {
        fetchTypes().then(data => course.setTypes(data))
        fetchAreas().then(data => course.setAreas(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const addCourse = () => {
        const formData = new FormData()
        formData.append('name', name) //Метод append() из интерфейса FormData добавляет новое значение в существующий ключ внутри объекта FormData, или создаёт ключ, в случае если он отсутствует.
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', course.selectedType)
        formData.append('areaId', course.selectedArea)
        // formData.append('info', JSON.stringify(info)) //массив нельзя отдать, поэтому переводим в json, на сервере она будет парситьяс оьратно в массив
        createCourse(formData).then(data => setActive())
    }
    const changeSelectedType = event => {
        setSelectedType(event.target.value);
        course.setSelectedType(event.target.value)
    };
    const changeSelectedArea = event => {
        setSelectedArea(event.target.value);
        course.setSelectedArea(event.target.value)
    };
    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                    <div className="modal-body">
                        <h3>Добавить курс</h3>
                        <form>

                            <h4>Выберите тип </h4>
                            <select
                                value={selectedType}
                                onChange={changeSelectedType}>
                                {
                                    course.types.map(type =>
                                        <option
                                            key={type.id}
                                            value={type.id}
                                        >
                                            {type.name}
                                        </option>
                                    )}
                            </select>

                            <h4>Выберите область</h4>
                            <select
                                value={selectedArea}
                                onChange={changeSelectedArea}>
                                {course.areas.map(area =>
                                    <option
                                        key={area.id}
                                        value={area.id}
                                    >
                                        {area.name}
                                    </option>
                                )}
                            </select>

                            <input type="text" placeholder="Укажите название"
                                value={name}
                                onChange={e => setName(e.target.value)} />

                            <input type="number" placeholder="Укажите цену"
                                value={price}
                                onChange={e => setPrice(Number(e.target.value))}
                            // onChange={e => setPrice(parseInt(e.target.value, 10))}
                            />

                            <input
                                type="file"
                                onChange={selectFile}
                            />
                        </form>

                        {info.map(i =>
                            <form key={i.number}>

                                <input type="text" placeholder='Название'
                                    style={{ width: "20%" }}
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)} />

                                <input type="text" placeholder='Значение'
                                    style={{ width: "70%" }}
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)} />

                                <button className="btn__delete"
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Удалить</button>
                            </form>
                        )}

                        <div className='row'>
                            <button className="btn__clickable" onClick={addInfo}>Новое свойство</button>
                            <button className="btn__clickable" onClick={addCourse}>Добавить</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
});

export default CreateCourse;