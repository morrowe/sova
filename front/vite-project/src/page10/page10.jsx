import { im } from "../images/images";
import styles from "./page10.module.scss";

function Page10() {
    return (
        <main>
            <section className={styles.sect1}>
                <div className={styles.centr}>
                    <div className={styles.navig}>
                        <p>Главная → Новости</p>
                    </div>
                    <h2>Контакты</h2>
                    <div className={styles.info}>
                        <div className={styles.left}>
                            <div className={styles.contact}>
                                <img src={im.icons1} alt="" />
                                <p>8 800 950-33-98</p>
                            </div>
                            <div className={styles.contact}>
                                <img src={im.icons2} alt="" />
                                <p>info@hodfutureacademy.ru</p>
                            </div>
                            <div className={styles.contact}>
                                <img src={im.icons3} alt="" />
                                <p>г. Москва, ул. Ленина, д. 50</p>
                            </div>
                            <div className={styles.social}>
                                <img src={im.soc1} alt="" />
                                <img src={im.soc2} alt="" />
                                <img src={im.soc3} alt="" />
                                <img src={im.soc4} alt="" />
                                <img src={im.soc5} alt="" />
                            </div>
                            <button>Яндекс + Дзен</button>
                        </div>
                        <div className={styles.map}>
                            <img src={im.map} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        
        </main>
    );
}

export default Page10;