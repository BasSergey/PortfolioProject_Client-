import React, { useContext, useState } from 'react';
import { Context } from "../../index";
import { createType } from "../../http/courseAPI";
const CreateType = ({ active, setActive }) => {
    const { course } = useContext(Context)
    const [value, setValue] = useState('')
    const addType = () => {
        createType({ name: value }).then(data => {
            setValue('')
            setActive()
        })
    }
    return (
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                    <div className="modal-body">
                        <h3>Добавить тип</h3>
                        <form>
                            <h4>Укажите название</h4>
                            <input type="text"
                                value={value}
                                onChange={e => setValue(e.target.value)} />
                            <button className="btn__clickable" onClick={addType}>Добавить</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateType;