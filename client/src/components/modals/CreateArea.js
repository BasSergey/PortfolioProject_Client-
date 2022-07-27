import React, { useState } from 'react';
import { createArea, createType } from "../../http/courseAPI";

const CreateArea = ({ active, setActive }) => {
    const [value, setValue] = useState('')

    const addArea = () => {
        createArea({ name: value }).then(data => {
            setValue('')
            setActive()
        })
    }
    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                    <div className="modal-body">
                    <h3 >Добавить область</h3>
                        <form>
                            <h4>Укажите название</h4>
                            <input type="text"
                                className=''
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                placeholder={"Введите название области"} />
                            <button className="btn__clickable" onClick={addArea}>Добавить</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateArea;
