import { useEffect, useRef, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page5.module.scss"

function Page5() {
    const [programs, setPrograms] = useState([]); 
        useEffect(() => {
        axios.get("http://localhost:3000/api/programs")
        .then(res => setPrograms(res.data))
        .catch(err => console.error(err));
    }, []);
    return (
        <>
            <main>
                <section className={styles.sect1}>
                    <div className={styles.navig}>
                        <p>Главная → Мероприятия</p>
                        <h3>Все мероприятия</h3>
                    </div>
                        <div className={styles.openday}>
                            <div className={styles.date}>
                                <h2>25</h2>
                                <p>ноября</p>
                            </div>
                            <div className={styles.info}>
                                <h3>День открытых дверей</h3>
                                <p>Приглашаем всех желающих на бесплатную экскурсию в мир востребованных профессий и полезных навыков</p>
                            </div>
                            <button>Записаться</button>
                        </div>
                        <div className={styles.thre}>
                            {programs.map((item, index) => (
                            <div className={styles.programs}>
                                <p>Программа</p>
                                <div className={styles.blue}>
                                    <img src={im.icon} alt="" />
                                    <p>{item.name}</p>
                                </div>
                                <p>{item.text}</p>
                                <p className={styles.time}>{item.time}</p>
                            </div>
                            ))}
                        </div>
                        <div className={styles.centr}>
                            <div className={styles.one}>
                                <div className={styles.imageBlock}>
                                    <img src={im.webinarAuthor} alt="Вебинар" />
                                </div>
                                <div className={styles.contentBlock}>
                                    <span className={styles.badge}>Вебинар</span>
                                    <h2 className={styles.title}>Заголовок мероприятия</h2>
                                    <p className={styles.description}>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</p>
                                    <time className={styles.date} dateTime="2021-11-16">16 ноября 2021</time>
                                </div>
                            </div>
                            <div className={styles.two}>
                                <h2>Заголовок мероприятия</h2>
                                <p>Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя</p>
                            </div>
                        </div>
                        <div className={styles.three}>
                            {programs.map((item, index) => (
                            <div className={styles.programs}>
                                <p>Программа</p>
                                <div className={styles.blue}>
                                    <img src={im.icon} alt="" />
                                    <p>{item.name}</p>
                                </div>
                                <p>{item.text}</p>
                                <p className={styles.time}>{item.time}</p>
                            </div>
                            ))}
                        </div>
                </section>
            </main>
        </>
    )
}
export default Page5