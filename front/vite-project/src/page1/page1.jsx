import { useEffect, useRef, useState } from 'react';
import { im } from "../images/images.js";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay } from 'swiper/modules'; 
import axios from "axios"
import styles from "./page1.module.scss";
import 'swiper/css';

function Page1() {
    const [activeAge, setActiveAge] = useState("children");
    const [otzv, setOtzv] = useState([]); 
        useEffect(() => {
        axios.get("http://localhost:3000/api/otzv")
        .then(res => setOtzv(res.data))
        .catch(err => console.error(err));
    }, []);
    return (
        <>
            <main>
                <section className={styles.sect1}>
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <h1>Образовательная платформа <br/> ХОД Future Academy</h1>
                            <p>Актуальные знания для новичков и профессионалов</p>
                        </div>
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.container}>
                        <div className={styles.top}>
                            <img src={im.sova1} alt="" />
                        </div>
                        <div className={styles.sort}>
                            <div className={styles.tabs}>
                                <button
                                    onClick={() => setActiveAge("children")}
                                    className={
                                        activeAge === "children"
                                            ? styles.active
                                            : ""
                                    }>
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
                                    }>
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
                                    }>
                                    <img src={im.family} alt="" />
                                    Взрослые
                                    <span>18 — ∞ </span>
                                </button>
                            </div>
                            <div className={styles.courses}>
                                <button>Робототехника</button>
                                <button>Создание игр</button>
                                <button>Web-разработка</button>
                                <button>Мультимедиа</button>
                                <button>Шахматы</button>
                                <button>3D-моделирование и дизайн</button>
                                <button>Английский язык</button>
                                <button>Блогинг</button>
                                <button>Soft skills</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect3}>
                    <div className={styles.video}>
                        <button><img src={im.play} alt="" /></button>
                    </div>
                </section>
                <section className={styles.sect4}>
                    <div className={styles.container}>
                        <h2>Актуальные знания от признанных экспертов рынка для новичков и практикующих специалистов</h2>
                        <div className={styles.stats}>
                            <div>
                                <h3>600</h3>
                                <p>Курсов</p>
                            </div>
                            <div>
                                <h3>82</h3>
                                <p>Ведущих преподавателей</p>
                            </div>
                            <div>
                                <h3>14795</h3>
                                <p>Выпускников</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect5}>
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
                </section>
                <section className={styles.sect6}>
                    <div className={styles.container}>
                        <div className={styles.leftCard}>
                            <img src={im.icon1} alt="" />
                            <h3>Программы обучения</h3>
                            <p>В списке наших курсов вы сможете найти профессию и навыки на будущее.</p>
                            <button> Подробнее</button>
                        </div>
                        <div className={styles.rightCards}>
                            <div>
                                <img src={im.icon4} alt="" />
                                <h3>Новости Академии</h3>
                            </div>
                            <div>
                                <img src={im.icon3} alt="" />
                                <h3>Мир IT</h3>
                            </div>
                            <div>
                                <img src={im.icon2} alt="" />
                                <h3>Попробуй!</h3>
                                <p>Пройдите тест и узнайте свои способности в сфере информационных технологий</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect7}>
                    <h2>Отзывы наших студентов</h2>
                    <div className={styles.carouselContainer}>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20} 
                            slidesPerView={1} 
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 },
                                1440: { slidesPerView: 5.5 }
                            }}
                            className={styles.mySwiper}>
                            {otzv.map((item) => (
                                <SwiperSlide key={item.id} className={styles.review}>
                                    <div className={styles.userInfo}>
                                        <img src={item.img} alt={item.name} className={styles.avatar} />
                                        <div className={styles.userText}>
                                            <p className={styles.name}>{item.name}</p>
                                            <p className={styles.work}>{item.work}</p>
                                        </div>
                                    </div>
                                    <p className={styles.reviewText}>{item.start}</p>
                                    <span className={styles.stars}>
                                        <img src={im.star} alt="star" />
                                        {item.rating}
                                    </span>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
                <section className={styles.sect8}>
                    <div className={styles.container}>
                        <h2>Добро пожаловать в Академию будущего ХОД</h2>
                        <div className={styles.advantages}>
                            <div>
                                <img src={im.icon5} alt="" />
                                <p>Передовой подход к образовательному процессу</p>
                            </div>
                            <div>
                                <img src={im.icon6} alt="" />
                                <p>Непрерывное усовершенствование и пополнение базы курсов</p>
                            </div>
                            <div>
                                <img src={im.icon7} alt="" />
                                <p>Только практикующие преподаватели</p>
                            </div>
                            <div>
                                <img src={im.icon8} alt="" />
                                <p>Сопровождение на всех этапах. От начала обучения до трудоустройства</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Page1;