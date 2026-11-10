import { useState } from "react";
import { im } from "../images/images";
import styles from "./page13.module.scss";

const tags = [
  "Робототехника",
  "Создание игр",
  "Web-разработка",
  "Мультимедиа",
  "Шахматы",
  "3D-моделирование и дизайн",
  "Английский язык",
  "Блогинг",
  "Soft skills"
];

const VACANCY = [
  "Дизайнер",
  "Разработчик игр",
  "Веб-разработчик",
  "Дизайнер",
  "Разработчик игр",
  "Веб-разработчик",
  "Дизайнер",
  "Разработчик игр"
];

function Page13() {
  const [openId, setOpenId] = useState(null);

  return (
    <main>
      <section className={styles.sect1}>
        <div className={styles.centr}>
          <div className={styles.nav}>
            <p>Главная</p>
            <span>→</span>
            <p>Вакансии</p>
          </div>

          <h2>Вакансии</h2>

          <p className={styles.text}>
            Станьте частью команды ХОД Future Academy
          </p>

          <div className={styles.tags}>
            {tags.map((item) => (
              <button key={item}>{item}</button>
            ))}
          </div>
          <div className={styles.list}>
            {VACANCY.map((item, index) => (
              <div
                key={index}
                className={styles.item}
                onClick={() =>
                  setOpenId(openId === index ? null : index)
                }
              >
                <div className={styles.top}>
                  <h3>{item}</h3>

                  <div>
                    <p>г. Москва</p>
                    <span>
                      {openId === index ? "−" : "+"}
                    </span>
                  </div>
                </div>
                <div
                  className={`${styles.bottom}
                  ${
                    openId === index
                      ? styles.active
                      : ""
                  }`}
                >
                  <p>
                    Требования:
                    знание HTML, CSS,
                    JavaScript, React.
                    Опыт работы будет
                    преимуществом.
                  </p>
                  <button>
                    Откликнуться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page13;