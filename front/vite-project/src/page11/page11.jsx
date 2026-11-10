import { useEffect, useRef, useState } from 'react';
import { im } from "../images/images";
import axios from "axios"
import styles from "./page11.module.scss";
const FAQ_DATA = [
    {
        id: 1,
        q: "У меня нет опыта в программировании. Подойдёт ли мне этот курс?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
    },
    {
        id: 2,
        q: "Нужно ли знать математику?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
    },
    {
        id: 3,
        q: "Сколько часов в неделю мне нужно будет уделять курсу?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
    },
    {
        id: 4,
        q: "Кто будет помогать мне на курсе?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, neque sit amet aliquam cursus, ante urna porta mauris, eget venenatis risus turpis ac nisl. Aenean blandit, nulla tincidunt efficitur placerat, ante nisl auctor ipsum, in auctor mauris lacus sed nibh. Quisque id imperdiet metus, non semper dui. Phasellus pellentesque vitae leo in dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id aliquam nunc. Sed dignissim, nibh quis dapibus dapibus, ex sapien ultricies leo, sit amet placerat arcu sem id sem."
    }
];

function Page11() {
    const [openFaqId, setOpenFaqId] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
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
                            <h4>Веб-разработчик</h4>
                            <p>
                                Научитесь создавать сайты и веб-приложения,
                                работать с современными технологиями и
                                программировать на JavaScript.
                            </p>
                            <div className={styles.learn}>
                                <div className={styles.srok}>
                                    <p>Срок обучения: 12 месяцев</p>
                                </div>
                                <div className={styles.time}>
                                    <p>
                                        Режим занятий:
                                        <br />
                                        2 раза в неделю
                                    </p>
                                </div>
                            </div>
                            <div className={styles.price}>
                                <p>от 4 350 ₽ в месяц</p>
                            </div>
                            <div className={styles.text}>
                                <h3>1 занятие бесплатное</h3>
                            </div>
                            <button>
                                Записаться на пробное занятие
                            </button>
                        </div>
                        <div className={styles.right}>
                            <img src={im.web} alt="" />
                        </div>
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.top}>
                        <img src={im.sova7} alt="" />
                        <div>
                            <img src={im.vector1} alt="" />
                            <h3>Заголовок</h3>
                            <p>
                                Краткое описание преимущества обучения.
                            </p>
                        </div>
                        <div>
                            <img src={im.vector2} alt="" />
                            <h3>Заголовок</h3>
                            <p>
                                Краткое описание преимущества обучения.
                            </p>
                        </div>
                        <div>
                            <img src={im.vector3} alt="" />
                            <h3>Заголовок</h3>
                            <p>
                                Краткое описание преимущества обучения.
                            </p>
                        </div>
                    </div>
                    <div className={styles.video}>
                        <button>
                            <img src={im.play} alt="" />
                        </button>
                    </div>
                    <div className={styles.info}>
                        <h2>Кто такой веб-разработчик</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec. Suspendisse a ullamcorper nisi. Duis et mauris et ex posuere dignissim vitae a diam. Praesent vulputate nulla sapien, nec auctor nibh congue eu. Nulla lectus felis, luctus et sodales ac, convallis quis urna. Etiam id ultricies dolor, non efficitur tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        </p>
                        <h3>Вы научитесь:</h3>
                        <div className={styles.plus}>
                            <div>
                                <img src={im.yes} alt="" />
                                <p>Создавать современные сайты</p>
                            </div>
                            <div>
                                <img src={im.yes} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div>
                                <img src={im.yes} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div>
                                <img src={im.yes} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div>
                                <img src={im.yes} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div>
                                <img src={im.yes} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect3}>
                    <div className={styles.program}>
                        <h2>
                            Эта программа подойдет тем, кто
                        </h2>
                        <div className={styles.cards}>
                            <div>
                                <p>
                                    Никогда не работал и хочет получить востребованную профессию, трудоустроиться или создать собственный бизнес с нуля
                                </p>
                            </div>
                            <div>
                                <p>
                                    Хочет научиться новому и попробовать себя в интересной и востребованной професии
                                </p>
                            </div>
                            <div>
                                <p>
                                    Хочет сменить работу и получить актуальную высокооплачиваемую специальность в IT
                                </p>
                            </div>
                        </div>
                        <button>
                            Записаться на курс
                        </button>
                    </div>
                </section>
                <section className={styles.sect4}>
                    <div className={styles.study}>
                        <h2>Принципы обучения</h2>
                        <div className={styles.items}>
                            <div>
                                <img src={im.icon5} alt="" />
                                <p>
                                    Передовой подход к образовательному процессу
                                </p>
                            </div>
                            <div>
                                <img src={im.icon6} alt="" />
                                <p>
                                    Непрерывное усовершенствование и пополнение базы курсов
                                </p>
                            </div>
                            <div>
                                <img src={im.icon7} alt="" />
                                <p>
                                    Только практикующие преподаватели
                                </p>
                            </div>
                            <div>
                                <img src={im.icon8} alt="" />
                                <p>
                                    Сопровождение на всех этапах. От начала обучения до трудоустройства
                                </p>
                            </div>
                        </div>
                        <h2>
                            Сколько зарабатывает веб-разработчик
                        </h2>
                        <div className={styles.money}>
                            <div>
                                <h3>Junior</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. </p>
                                <p>от 80 000 ₽ в месяц</p>
                            </div>
                            <div>
                                <h3>Middle</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. </p>
                                <p>от 150 000 ₽ в месяц</p>
                            </div>
                            <div>
                                <h3>Senior</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. </p>
                                <p>от 200 000 ₽ в месяц</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect5}>
                    <div className={styles.content}>
                        <h2>Как проходит обучение</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec. Suspendisse a ullamcorper nisi. Duis et mauris et ex posuere dignissim vitae a diam. Praesent vulputate nulla sapien, nec auctor nibh congue eu. 
                        </p>
                        <div className={styles.images}>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                </section>
                <section className={styles.sect6}>
                    <div className={styles.kurs}>
                        <h2>Содержание курса</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec. Suspendisse a ullamcorper nisi. Duis et mauris et ex posuere dignissim vitae a diam. Praesent vulputate nulla sapien, nec auctor nibh congue eu. Nulla lectus felis, luctus et sodales ac, convallis quis urna. Etiam id ultricies dolor, non efficitur tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque in augue porttitor, ornare nulla id, hendrerit nunc.
                        </p>
                        <div className={styles.bottom}>
                            <div className={styles.left}>
                                <div className={styles.price}>
                                    <p>от 4 350 ₽ в месяц</p>
                                </div>
                                <button>
                                    Записаться
                                </button>
                            </div>
                            <img src={im.sova4} alt="" />
                        </div>
                    </div>
                </section>
                <section className={styles.sect7}>
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
                <section className={styles.sect8}>
                    <div className={styles.work}>
                        <h2>
                            Трудоустройство или создание бизнеса
                        </h2>
                        <div className={styles.box}>
                            <div>
                                <p>Трудоустройство</p>
                                <p>Полученный уровень образования позволит претендовать на реальные вакансии и начать карьеру в сфере IT. Мы подберем подходящие предложения, собрем портфолио и резюме, подготовим к собеседованию, научимся выполнять тестовые задания и поможем с трудоустройством.</p>
                                <p>Планируемый доход:</p>
                                <p>
                                    80 000—200 000 ₽ в месяц
                                </p>
                            </div>
                            <div>
                                <p>Создание бизнеса</p>
                                <p>Полученный уровень образования позволит претендовать на реальные вакансии и начать карьеру в сфере IT. Мы подберем подходящие предложения, собрем портфолио и резюме, подготовим к собеседованию, научимся выполнять тестовые задания и поможем с трудоустройством.</p>
                                <p>Планируемый доход:</p>
                                <p>
                                    120 000—400 000 ₽ в месяц
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect9}>
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
    );
}

export default Page11;