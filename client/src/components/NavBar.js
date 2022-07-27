import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import MadeBy from './MadeBy'
import { SideBarData } from './SideBarData'
import { Context } from '..';
function NavBar() {
    const [sidebar, setSidebar] = useState(false)
    // const showSidebar = () => setSidebar(!sidebar) 
    const showSidebar = () => {
        setSidebar(!sidebar);
        // sidebar ? document.body.style.overflow = 'visible' : document.body.style.overflow = 'hidden';
    }
    const { store } = useContext(Context)
    return (
        <>

            <button type="button"
                className={sidebar ? 'btn menu-bars active ' : 'btn menu-bars '}
                onClick={showSidebar}
            >
                <span className="menu-bars__line"></span>
                <span className="menu-bars__line"></span>
                <span className="menu-bars__line"></span>
            </button>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <Link to="/login">
                    <button onClick={() => store.logout()} className="btn__clickable">Выйти</button>
                </Link>
                <ul className='nav-menu-items'>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}
                            >
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <MadeBy />

                <div className='nav-menu__wrapper'></div>
            </nav>

        </>
    )
}

export default NavBar
