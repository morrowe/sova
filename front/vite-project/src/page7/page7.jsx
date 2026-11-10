import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page7.module.scss"

function Page7() {
    const [news, setNews] = useState([]); 
        useEffect(() => {
        axios.get("http://localhost:3000/api/news")
        .then(res => setNews(res.data))
        .catch(err => console.error(err));
    }, []);
    return (
        <>
            <main>
                <section className={styles.sect1}>
                    <div className={styles.navig}>
                        <p>Главная → Новости</p>
                        <h3>Новости ХОД Future Academy</h3>
                    </div>
                    <div className={styles.news}>
                        {news.map((item, index) => (
                        <div className={styles.block}>
                            <div className={styles.immg}><img src={item.img} alt="" /></div>
                            <div className={styles.info}>
                                <p>{item.data}</p>
                                <p>{item.headline}</p>
                                <p>{item.info}</p>
                                <button><NavLink to="/page8">Подробнее →</NavLink></button>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
export default Page7