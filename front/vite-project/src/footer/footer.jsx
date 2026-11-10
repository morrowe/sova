import { useEffect, useRef, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./footer.module.scss"


function Footer() {
    return (
        <>
            <section className={styles.sect}>
                <div className={styles.form}>
                    <img src={im.sova10} alt="" />
                    <div className={styles.inputs}>
                        <input type="text" placeholder="Ваше имя"/>
                        <div className={styles.info}>
                            <input type="text" placeholder="Ваш телефон"/>
                            <input type="email" placeholder="Ваш e-mail" />
                        </div>
                        <div className={styles.butt}>
                            <p>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</p>
                            <button>
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <footer className={styles.footer}>
                <section className={styles.container}>
                    <div className={styles.left}>
                        <img src={im.logo2} alt="Future Academy" className={styles.logo} />
                        
                        <div className={styles.contacts}>
                            <h1 className={styles.phone}>8 800 950-33-98</h1>
                            <p className={styles.text}>г. Москва, ул. Ленина, д. 50</p>
                            <p className={styles.text}>info@hodfutureacademy.ru</p>
                        </div>

                        <div className={styles.socialsAndCopyright}>
                            <div className={styles.socials}>
                                <a href="/"><img src={im.soc11} alt="vk" /></a>
                                <a href="/"><img src={im.soc22} alt="instagram" /></a>
                                <a href="/"><img src={im.soc33} alt="facebook" /></a>
                                <a href="/"><img src={im.soc44} alt="youtube" /></a>
                                <a href="/"><img src={im.soc55} alt="telegram" /></a>
                            </div>
                            <p className={styles.copyright}>© ХОД, Future Academy</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.column}>
                            <h2>Детям</h2>
                            <a href="">Робототехника</a>
                            <a href="">Создание игр</a>
                            <a href="">Программирование</a>
                            <a href="">Мультимедиа</a>
                            <a href="">Soft skills</a>
                            <a href="">Шахматы</a>
                            <a href="">Блогинг</a>
                            <a href="">Создание игр</a>
                            <a href="">Программирование</a>
                            <a href="">Мультимедиа</a>
                            <a href="">Soft skills</a>
                        </div>
                        <div className={styles.column}>
                            <h2>Подросткам</h2>
                            <a href="">Web-разработка</a>
                            <a href="">Прикладное программирование</a>
                            <a href="">Графическое моделирование</a>
                            <a href="">Game Development</a>
                            <a href="">Soft skills</a>
                            <a href="">Разработчик мобильных приложений</a>
                            <a href="">Блогинг</a>
                            <a href="">Создание игр</a>
                            <a href="">Программирование</a>
                            <a href="">Мультимедиа</a>
                            <a href="">Soft skills</a>
                        </div>
                        <div className={styles.column}>
                            <h2>Взрослым</h2>
                            <a href="">Разработчик игр на Unity</a>
                            <a href="">Разработка ПО</a>
                            <a href="">Графический Дизайн</a>
                            <a href="">Тестировщик ПО</a>
                            <a href="">Интернет Маркетинг</a>
                            <a href="">Java-разработчик</a>
                            <a href="">Python–разработчик</a>
                            <a href="">IOS-разработчик</a>
                            <a href="">Программирование</a>
                        </div>
                        <div className={styles.column}>
                            <h2>Информация</h2>
                            <a href="">Об академии</a>
                            <a href="">Мероприятия</a>
                            <a href="">Новости</a>
                            <a href="">База знаний</a>
                            <a href="">Карьера</a>
                            <a href="">Контакты</a>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}
export default Footer