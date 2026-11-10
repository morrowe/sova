import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./header.module.scss"


function Header() {
    return (
        <>
            <header>
            <div className={styles.block}>
                <div className={styles.head}>
                    <div className={styles.logo}>
                        <img src={im.logo} />
                    </div>
                    <nav className={styles.nav}>
                        <NavLink to={"/page2"}  className={({ isActive }) => (isActive ? `${styles.active} ${styles.activee}` : "")}>Все курсы</NavLink>
                        <NavLink to={"/page6"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>Мероприятия</NavLink>
                        <NavLink to={'/page3'} className={({isActive}) => (isActive ? "active":"")}>Базы знаний</NavLink>
                        <NavLink to={'/page12'} className={({isActive}) => (isActive ? "active":"")}>Карьера</NavLink>
                        <p>8 800 950-33-98 </p>
                        <NavLink to={'/page4'} className={({isActive}) => (isActive ? "active":"")}><button className={styles.btnNav}>Войти</button></NavLink>
                    </nav> 
                </div>
            </div>
        </header>
        </>
    )
}
export default Header