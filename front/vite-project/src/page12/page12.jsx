import { im } from "../images/images";
import styles from "./page12.module.scss";

function Page12() {
    return (
        <>
            <main>

                <section className={styles.sect1}>
                    <div className={styles.centr}>
                        <div className={styles.left}>
                            <h2>Поможем построить карьеру</h2>
                            <p>Карьерный центр ХОД Future Academy</p>

                            <button>
                                Задать вопрос о трудоустройстве
                            </button>
                        </div>
                        <div className={styles.right}>
                            <img src={im.people1} alt="" />
                            <img src={im.people2} alt="" />
                            <img src={im.people3} alt="" />
                        </div>
                    </div>
                </section>
                <section className={styles.sect2}>
                    <div className={styles.top}>
                        <img src={im.sova3} alt="" />
                        <div>
                            <img src={im.vector1} alt="" />
                            <h3>Заголовок</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget
                            </p>
                        </div>
                        <div>
                            <img src={im.vector2} alt="" />
                            <h3>Заголовок</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget
                            </p>
                        </div>
                        <div>
                            <img src={im.vector3} alt="" />
                            <h3>Заголовок</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget
                            </p>
                        </div>
                    </div>
                    <div className={styles.about}>
                        <h2>
                            Почему вы точно найдете работу
                            с ХОД Future Academy
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec. Suspendisse a ullamcorper nisi. Duis et mauris et ex posuere dignissim vitae a diam. Praesent vulputate nulla sapien, nec auctor nibh congue eu. Nulla lectus felis, luctus et sodales ac, convallis quis urna. Etiam id ultricies dolor, non efficitur tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        </p>
                        <div className={styles.number}>
                            <div>
                                <h3>600</h3>
                                <p>Вакансий</p>
                            </div>
                            <div>
                                <h3>82%</h3>
                                <p>
                                    Трудоустроенных
                                    студентов
                                </p>
                            </div>
                            <div>
                                <h3>98 795</h3>
                                <p>
                                    Средняя зарплата
                                    наших выпускников
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect3}>
                    <div className={styles.road}>
                        <h2>
                            Ваш путь к трудоустройству
                        </h2>
                        <div className={styles.items}>
                            <div>
                                <img src={im.vect1} alt="" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec. 
                                </p>
                            </div>
                            <div>
                                <img src={im.vect2} alt="" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem.
                                </p>
                            </div>
                            <div>
                                <img src={im.vect3} alt="" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem.
                                </p>
                            </div>
                        </div>
                        <button>
                            Задать вопрос
                            о трудоустройстве
                        </button>
                    </div>
                </section>
                <section className={styles.sect4}>
                    <div className={styles.jobs}>
                        <h2>
                            Примеры активных вакансий
                        </h2>
                        <div className={styles.cards}>
                            <div>
                                <h3>
                                    Графический дизайнер
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. 
                                </p>
                                <span>
                                    от 80 000 ₽ в месяц
                                </span>
                            </div>
                            <div>
                                <h3>
                                    Веб-разработчик
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. 
                                </p>
                                <span>
                                    от 90 000 ₽ в месяц
                                </span>
                            </div>
                            <div>
                                <h3>
                                    Графический дизайнер
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. 
                                </p>
                                <span>
                                    от 80 000 ₽ в месяц
                                </span>
                            </div>
                            <div>
                                <h3>
                                    Графический дизайнер
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. 
                                </p>
                                <span>
                                    от 80 000 ₽ в месяц
                                </span>
                            </div>

                            <div>
                                <h3>
                                    Веб-разработчик
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. 
                                </p>
                                <span>
                                    от 90 000 ₽ в месяц
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect5}>
                    <div className={styles.partner}>
                        <h2>
                            Компании где уже работают
                            наши студенты
                        </h2>
                        <div className={styles.logo}>
                            <img src={im.tink} alt="" />
                            <img src={im.alfa} alt="" />
                            <img src={im.vk} alt="" />
                            <img src={im.avito} alt="" />
                            <img src={im.alfa} alt="" />
                            <img src={im.vk} alt="" />
                            <img src={im.avito} alt="" />
                            <img src={im.vk} alt="" />
                            <img src={im.tink} alt="" />
                            <img src={im.alfa} alt="" />
                            <img src={im.avito} alt="" />
                            <img src={im.tink} alt="" />
                        </div>

                    </div>
                </section>

                <section className={styles.sect6}>
                    <div className={styles.story}>
                        <h2>
                            Истории успеха
                        </h2>
                        <div className={styles.cards}>

                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </section>
                <section className={styles.sect7}>
                    <div className={styles.help}>
                        <h2>
                            Помогаем с трудоустройством
                        </h2>
                        <div className={styles.items}>
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

export default Page12;