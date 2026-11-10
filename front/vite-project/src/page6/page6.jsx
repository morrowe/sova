import { useEffect, useRef, useState } from 'react';
import { im } from "../images/images";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import axios from "axios"
import styles from "./page6.module.scss";

const PROGRAM_DATA = [
    {
        id: 1,
        title: "День первый",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
    },
    {
        id: 2,
        title: "День второй",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
    },
    {
        id: 3,
        title: "День третий",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
    }
];
const images = [
    "../src/images/photo1.png",
    "../src/images/photo2.png",
    "../src/images/photo3.png",
    "../src/images/photo4.png",
    "../src/images/photo5.png",
    "../src/images/photo6.png",
];

function Page6() {
    const [openId, setOpenId] = useState(1);
    const toggleProgram = (id) => {
        setOpenId(openId === id ? null : id);
    };
    const [prepods, setPrepods] = useState([]); 
        useEffect(() => {
        axios.get("http://localhost:3000/api/prepods")
        .then(res => setPrepods(res.data))
        .catch(err => console.error(err));
    }, []);
    return (
        <>
            <main>
                <section className={styles.sect1}>
                    <div className={styles.centr}>
                        <div className={styles.left}>
                            <h2>Название мероприятия</h2>
                            <p>Подпись к названию</p>
                            <div className={styles.plus}>
                                <div>
                                    <p>Узнайте самые востребованные профессии, на которые более 113 тысяч вакансий</p>
                                </div>
                                <div>
                                    <p>Выберите подходящую именно для вас</p>
                                </div>
                                <div>
                                    <p>Сделайте первые шаги к возможности найти на доход более 100 тысяч рублей</p>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <h3>Запишись сейчас</h3>
                                <button> Записаться на интенсив</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.top}>
                        <img src={im.sova3} alt="" />
                        <div>
                            <img src={im.vector1} alt="" />
                            <h3>Заголовок</h3>
                            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget</p>
                        </div>
                        <div>
                            <img src={im.vector2} alt="" />
                            <h3>Заголовок</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget </p>
                        </div>
                        <div>
                            <img src={im.vector3} alt="" />
                            <h3>Заголовок</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget</p>
                        </div>
                    </div>
                    <div className={styles.program}>
                        <h2>Программа мероприятия</h2>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget varius eleifend, massa nibh imperdiet est, vel sagittis quam justo vestibulum eros. Cras dignissim mi quis fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor venenatis vel. In hac habitasse platea dictumst. </p>
                        <div className={styles.accordion}>
                            {PROGRAM_DATA.map((item) => (
                                <div key={item.id} className={`${styles.item} ${openId === item.id ? styles.active : ""}`} >
                                    <div className={styles.title} onClick={() => toggleProgram(item.id)} >
                                        <span>{item.title}</span>
                                        <span> {openId === item.id ? "×" : "+"} </span>
                                    </div>
                                    <div className={styles.answer}>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className={styles.sect3}>
                    <div className={styles.teacher}>
                        <h3>Наши преподаватели</h3>
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
                <section className={styles.sect4}>
                    <div className={styles.gallery}>
                        <h2>Фотографии с прошлых мероприятий </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fusce mi elit, egestas ut feugiat id.</p>
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
                    </div>
                </section>
            </main>
        </>
    );
}

export default Page6;