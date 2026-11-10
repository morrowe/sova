import { useEffect, useRef, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page2.module.scss";

const COURSES = [
    { id: 1, color: styles.blue },
    { id: 2, color: styles.orange },
    { id: 3, color: styles.yellow },
    { id: 4, color: styles.purple },
    { id: 5, color: styles.green },
    { id: 6, color: styles.blue },
    { id: 7, color: styles.blue2 },
    { id: 8, color: styles.yellow },
    { id: 9, color: styles.pink },
    { id: 10, color: styles.purple }
];

function Page2() {
    const [activeAge, setActiveAge] = useState("children");
    const [otzv, setOtzv] = useState([]); 
        useEffect(() => {
        axios.get("http://localhost:3000/api/otzv")
        .then(res => setOtzv(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <main className={styles.courses}>

            <section className={styles.sect1}>
                <div className={styles.centr}>
                    <h2>Все программы обучения</h2>
                    <div className={styles.tabs}>
                        <button
                            onClick={() => setActiveAge("children")}
                            className={
                                activeAge === "children"
                                    ? styles.active
                                    : ""
                            }
                        >
                            <img src={im.children} alt="" />
                            Дети
                            <span>8 — 14 лет</span>
                        </button>
                        <button
                            onClick={() => setActiveAge("teen")}
                            className={
                                activeAge === "teen"
                                    ? styles.active
                                    : ""
                            }
                        >
                            <img src={im.teen} alt="" />
                            Подростки
                            <span>14 — 18 лет</span>
                        </button>
                        <button
                            onClick={() => setActiveAge("adult")}
                            className={
                                activeAge === "adult"
                                    ? styles.active
                                    : ""
                            }
                        >
                            <img src={im.family} alt="" />
                            Взрослые
                            <span>18 — ∞ </span>
                        </button>
                    </div>
                    <div className={styles.content}>
                        <aside className={styles.filter}>
                            <div className={styles.block}>
                                <h3>Уровень сложности</h3>
                                <label>
                                    <input type="radio" name="level" />
                                    Новичок
                                </label>
                                <label>
                                    <input type="radio" name="level" />
                                    Пользователь
                                </label>
                                <label>
                                    <input type="radio" name="level" />
                                    Профессионал
                                </label>
                                <label>
                                    <input type="radio" name="level" />
                                    Читер
                                </label>
                            </div>
                            <div className={styles.block}>
                                <h3>Тип обучения</h3>
                                <label>
                                    <input type="radio" name="type" />
                                    Любой
                                </label>
                                <label>
                                    <input type="radio" name="type" />
                                    Профессия
                                </label>
                                <label>
                                    <input type="radio" name="type" />
                                    Курс
                                </label>
                            </div>
                            <div className={styles.block}>
                                <h3>Длительность</h3>
                                <p>от 1 до 24 месяцев</p>
                                <input
                                    type="range"
                                    min="1"
                                    max="24"
                                />
                            </div>
                            <div className={styles.banner}>
                                Баннер
                                <br />
                                280х400
                            </div>
                        </aside>
                        <div className={styles.right}>
                            <div className={styles.tags}>
                                <button>Робототехника</button>
                                <button>Создание игр</button>
                                <button>Web-разработка</button>
                                <button>Мультимедиа</button>
                                <button>Шахматы</button>
                                <button>3D-моделирование</button>
                                <button>Английский язык</button>
                                <button>Блогинг</button>
                                <button>Soft skills</button>
                            </div>
                            <div className={styles.cards}>
                                {COURSES.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`${styles.card} ${item.color}`}
                                    >
                                        <p>Программа</p>
                                        <h3>«Разработка мобильных приложений»</h3>
                                        <span>
                                            Разработка мобильных
                                            приложений создаёт
                                            приложения, которыми люди
                                            ежедневно пользуются.
                                        </span>
                                        <h4>
                                            24 месяца
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Page2;