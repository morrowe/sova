import { useEffect, useRef, useState } from 'react';
import {im} from '../images/images.js';
import axios from "axios"
import styles from "./page9.module.scss";

function Page9() {
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
                            <h2>Образовательная платформа Future Academy</h2>
                            <p>Актуальные знания для новичков и профессионалов</p>
                        </div>
                        <div className={styles.right}>
                            <img src={im.girl} alt="" />
                        </div>
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.about}>
                        <img src={im.sova2} alt="" />
                        <div>
                            <img src={im.vector1} alt="" />
                            <h3>Мы создали Академию</h3>
                            <p>
                                для детей, чтобы заинтересовать их обучением и
                                увлечь миром науки и развития.
                            </p>
                        </div>
                        <div>
                            <img src={im.vector2} alt="" />
                            <h3>Мы создали Академию</h3>
                            <p>
                                для подростков, чтобы дать старт большим
                                возможностям и знаниям.
                            </p>
                        </div>
                        <div>
                            <img src={im.vector3} alt="" />
                            <h3>Мы создали Академию</h3>
                            <p>
                                для взрослых, чтобы у каждого появилась
                                возможность начать учиться в любом возрасте.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={styles.sect3}>
                    <div className={styles.video}>
                        <div>
                            <button><img src={im.play} alt="" /></button>
                        </div>
                    </div>
                </section>
                <section className={styles.sect4}>
                    <div className={styles.info}>
                        <div className={styles.div}>
                            <img src={im.people} alt="" />
                            <p className={styles.pf}>Имя Фамилия</p>
                            <p>Основатель Академии будущего ХОД</p>
                        </div>
                        <div className={styles.text}>
                            <p>«Все началось с любви к шахматам. Я хотел предвидеть ход противника, хотел просчитать его действия, хотел побеждать. Я не стал гением шахмат, но стратег и психолог из меня неплохой» - смеется Иван Иванович. Идея открыть Академию шахмат пришла к нему в 2020 году, когда в период полного локдауна он вдруг вспомнил про хобби - игру в шахматы.  Оказалось, что для игры в шахматы сейчас и доска-то не обязательна, все есть в телефоне. Племянник (сын?) Ивана Ивановича большую часть дня проводил в стрелялках на планшете.</p>
                            <p>«Я показал ему шахматы. К июню он уже был неплохим соперником» - Вскоре идея небольшой академии шахмат превратилась в план создания Академии Будущего, где дети смогут учиться тому, что им нравится, а взрослые попытаются изменить жизнь. Уж очень это сейчас актуально". </p>
                            <span> Из интервью с основателем Академии Будущего Ивановым И.И.</span>
                        </div>
                    </div>
                </section>
                <section className={styles.sect5}>
                    <div className={styles.value}>
                        <h2>Наши ценности</h2>
                        <div className={styles.items}>
                            <div>
                                <img src={im.icon5} alt="" />
                                <p>
                                    Содержание обучения должно быть актуальным, а методика проверенная годами.
                                </p>
                            </div>
                            <div>
                                <img src={im.icon8} alt="" />
                                <p>
                                    Педагог - прежде всего личность компетентная и харизматичная.
                                </p>
                            </div>
                            <div>
                                <img src={im.teen} alt="" />
                                <p>
                                    Точка развития образования - ребенок, его интересы и потребности
                                </p>
                            </div>
                            <div>
                                <img src={im.icon6} alt="" />
                                <p>
                                    Прогрессом правит любовь к знаниям
                                </p>
                            </div>
                            <div>
                                <img src={im.icon7} alt="" />
                                <p>
                                    Технологии правят миром, а человек эти технологии создает
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect6}>
                    <div className={styles.teacher}>
                        <h3>Наши люди</h3>
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
                <section className={styles.sect7}>
                    <div className={styles.programs}>
                        <h2>Наши программы</h2>
                        <div className={styles.text}>
                            <p>Предполагают проектное обучение</p>
                            <p>Учитывают возрастные особенности</p>
                            <p>Авторские и не имеют аналогов</p>
                            <p>Основаны на компетентностном подходе</p>
                            <p>Актуальны и фундаментальны</p>
                        </div>
                        <div className={styles.number}>
                            <div>
                                <h3>600</h3>
                                <p>Курсов</p>
                            </div>
                            <div>
                                <h3>82</h3>
                                <p>Преподавателя</p>
                            </div>
                            <div>
                                <h3>14 795</h3>
                                <p>Выпускников</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect8}>
                    <div className={styles.container}>
                        <h2>Нажми, если это о тебе</h2>
                        <div className={styles.advantages}>
                            <div>
                                <img src={im.icon9} alt="" />
                                <p>Я хочу, чтобы мой ребенок был успешным</p>
                            </div>
                            <div>
                                <img src={im.icon10} alt="" />
                                <p>Я хочу больше зарабатывать</p>
                            </div>
                            <div>
                                <img src={im.icon11} alt="" />
                                <p>Мой ребенок не выпускает гаджет из рук</p>
                            </div>
                            <div>
                                <img src={im.icon12} alt="" />
                                <p>Я хочу стать айтишником</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Page9;