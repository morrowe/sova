import { useEffect, useRef, useState } from 'react';
import {im} from '../images/images.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import axios from "axios"
import styles from "./page3.module.scss"

const FAQ_DATA = [
    {
        id: 1,
        q: "Кому подойдёт это курс?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
    },
    {
        id: 2,
        q: "Что нужно ребенку для занятий?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
    },
    {
        id: 3,
        q: "Где можно узнать расписание занятий?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
    },
    {
        id: 4,
        q: "Что делать, если ребенок пропустит занятие?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
    }
];
const images = [
    "../src/images/ches1.png",
    "../src/images/ches2.png",
    "../src/images/ches3.png",
    "../src/images/ches4.png",
    "../src/images/ches5.png",
    "../src/images/ches6.png",
];

function Page3() {
    const [openFaqId, setOpenFaqId] = useState(null);
    const toggleFaq = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };
    const [chess, setChess] = useState([]); 
        useEffect(() => {
        axios.get("http://localhost:3000/api/chess")
        .then(res => setChess(res.data))
        .catch(err => console.error(err));
    }, []);
    const [preim, setPreim] = useState([]); 
        useEffect(() => {
        axios.get("http://localhost:3000/api/preim")
        .then(res => setPreim(res.data))
        .catch(err => console.error(err));
    }, []);
    const [prepods, setPrepods] = useState([]); 
        useEffect(() => {
        axios.get("http://localhost:3000/api/prepods")
        .then(res => setPrepods(res.data))
        .catch(err => console.error(err));
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesPerView = 6;
    const currentPage = Math.floor(currentIndex / slidesPerView);
    const goToPage = (pageIndex) => {
        setCurrentIndex(pageIndex * slidesPerView);
    };
    return (
        <>
            <main>
                <section className={styles.sect1}>
                    <div className={styles.centr}>
                        <h4>Шахматная школа</h4>
                        <h2>Развитие мышления и логики</h2>
                        <div className={styles.learn}>
                            <div className={styles.srok}>
                                <p>Срок обучения: 5 лет</p>
                            </div>
                            <div className={styles.time}>
                                <p>Режим занятий: <br/> 2 раза в неделю по 2 академических часа</p>
                            </div>
                        </div>
                        <div className={styles.price}>
                            <p>от  4 350 ₽ в месяц</p>
                        </div>
                        <div className={styles.text}>
                            <h2>1 занятие бесплатное</h2>
                            <p>Прежде чем начать обучение советуем записаться на пробное заниятие</p>
                        </div>
                        <button>Записаться на пробное занятие</button>
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.chess}>
                        <img src={im.sova3} alt="" />
                        <div className={styles.goals}>
                            {chess.map((item, index) => (
                            <div>
                                <div className={styles.imm}><img src={item.img} alt="" /></div>
                                <h2>{item.name}</h2>
                                <p>{item.info}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.video}>
                        <div>
                            <button><img src={im.play} alt="" /></button>
                        </div>
                    </div>
                    <div className={styles.school}>
                        <div className={styles.white}>
                            <h3>Школа шахмат</h3>
                            <p>Шахматы - это отличная идея для времяпрепровождения с родителями, детьми и друзьями. Игра дает полезные в жизни навыки: учит побеждать и проигрывать, развивает творческие способности, вырабатывает стрессо-устойчивость, терпение, помогает сосредоточиться, а так же помогает осознать последствия своих действий.</p>
                            <div className={styles.plus}>
                                {preim.map((item, index) => (
                                <div>
                                    <img src={item.img} alt="" />
                                    <p>{item.text}</p>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.blue}>
                            <div>
                                <p>Шахматы могут помочь вам планировать наперед, не торопиться с решениями и взвешивать их плюсы и минусы.</p>
                                <p>Шахматами можно наслаждаться в любом возрасте — в результате, тренировка мозга может укреплять ваше здоровье.</p>
                            </div>
                            <button>Записаться на курс</button>
                        </div>
                    </div>
                </section>
                <section className={styles.sect3}>
                    <div className={styles.text}>
                        <h3>Chess academy для школьников</h3>
                        <p>Обеспечиваем индивидуальный подход к учащимся. В основе процесса обучения — тесное и открытое взаимодействие педагода и ученика. Обучение проходит по программе, созданной GM.</p>
                    </div>
                    <div className={styles.carouselContainer}>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={15}
                            slidesPerView={1.2}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                480: { slidesPerView: 2.2 },
                                768: { slidesPerView: 3.5 },
                                1024: { slidesPerView: 4.5 },
                                1440: { slidesPerView: 5.5 } 
                            }}
                            className={styles.mySwiper}>
                            {images.map((src, index) => (
                                <SwiperSlide key={index} className={styles.slide}>
                                    <img src={src} alt={`Слайд ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
                <section className={styles.sect4}>
                    <div className={styles.blovk}>
                        <div>
                            <h3>Содержание курса</h3>
                            <p className={styles.pp}>Программа включает в себя изучение истории возникновения игры в шахматы, современные тенденции игры в онлайн-шахматы, знакомство со знаменитыми шахматистами прошлого и настоящего. Дети знакомятся с фигурами и правилами игры, узнают основные понятия, отрабатывая все в игровой практике. Дебют, мителльшпиль, эндшпиль, стратегия и тактика игры, особенности позиции – все это включено в первый год обучения, а пятилетний курс предполагает обучение ребенка до уровня КМС.</p>
                        </div>
                        <img src={im.chesss} alt="" />
                    </div>    
                    <div className={styles.kurs}>
                        <div className={styles.left}>
                            <div className={styles.learn}>
                                <div className={styles.srok}>
                                    <p>Срок обучения: 5 лет</p>
                                </div>
                                <div className={styles.time}>
                                    <p>Режим занятий: <br/> 2 раза в неделю по 2 академических часа</p>
                                </div>
                            </div>
                            <div className={styles.price}>
                                <p>от  4 350 ₽ в месяц</p>
                            </div>
                            <button>Записаться на курс</button>
                        </div>
                        <img src={im.sova4} alt="" />
                    </div>
                </section>
                <section className={styles.sect5}>
                    <div className={styles.teacher}>
                        <h3>Мероприятие проводят</h3>
                        <div className={styles.ancet}>
                            {prepods.map((item, index) => (
                            <div>
                                <img src={item.foto} alt="" />
                                <p className={styles.name}>{item.name}</p>
                                <p>{item.info}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className={styles.sect6}>
                    <h2>
                        Найдите ответ на свой вопрос
                    </h2>
                    <div className={styles.faqblock}>
                        {FAQ_DATA.map((item) => (
                            <div
                                key={item.id}
                                className={`${styles.faqitem} ${
                                    openFaqId === item.id
                                        ? styles.active
                                        : ""
                                }`}
                            >
                                <div
                                    className={styles.faqtitle}
                                    onClick={() =>
                                        toggleFaq(item.id)
                                    }
                                >
                                    <span>
                                        {item.q}
                                    </span>

                                    <span>
                                        {openFaqId === item.id
                                            ? "×"
                                            : "+"}
                                    </span>
                                </div>
                                <div
                                    className={
                                        styles.faqanswer
                                    }
                                >
                                    <p>
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
export default Page3