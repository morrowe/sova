import { useEffect, useRef, useState } from 'react';
import { im } from "../images/images.js";
import axios from "axios"
import styles from "./page4.module.scss"

function Page4() {
    const [activeReg, setActiveReg] = useState("log");
    return (
        <>
            <main>
                <img src={im.sova5} className={styles.sova}/>
                <section className={styles.sect1}>
                    <div className={styles.container}>
                        <div className={styles.buttons}>
                            <button
                                onClick={() => setActiveReg("log")}
                                className={
                                    activeReg === "log"
                                        ? styles.active
                                        : ""
                                }>
                                Вход
                            </button>
                            <button
                                onClick={() => setActiveReg("redistr")}
                                className={
                                    activeReg === "redistr"
                                        ? styles.active
                                        : ""
                                }>
                                Регистрация
                            </button>
                        </div>
                        <div className={styles.vvod}>
                            <input type="text" placeholder='Поле ввода'/>
                            <input type="text" placeholder='Поле ввода'/>
                            <input type="text" placeholder='Поле ввода'/>
                        </div>
                        <p>Войти с помощью соцсетей:</p>
                        <div className={styles.social}>
                            <img src={im.soc1} alt="" />
                            <img src={im.soc2} alt="" />
                            <img src={im.soc3} alt="" />
                            <img src={im.soc4} alt="" />
                            <img src={im.soc5} alt="" />
                        </div>
                        <button>Войти</button>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Page4