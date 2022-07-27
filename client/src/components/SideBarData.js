import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'
import * as RiIcons from 'react-icons/ri'
export const  SideBarData = [
    
    {
        title : 'Home',
        path: '/mainpage',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title : 'Shop',
        path: '/shop',
        icon: <AiIcons.AiFillShopping/>,
        cName:'nav-text'
    },
    {
        title : 'Admin',
        path: '/admin',
        icon: <RiIcons.RiAdminFill/>,
        cName:'nav-text'
    },
    {
        title : 'Loading',
        path: '/loading',
        icon: <AiIcons.AiOutlineLoading3Quarters/>,
        cName:'nav-text',
    },
    {
        title : 'Sergey',
        path: '/sergey',
        icon: <IoIcons.IoPersonCircleOutline/>,
        cName:'nav-text'
    },
] 
