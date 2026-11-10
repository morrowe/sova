CREATE TABLE otzv (
    id SERIAL PRIMARY KEY,
    img varchar,
    name varchar,
    work varchar,
    start varchar,
    rating varchar
);

INSERT INTO otzv (id, img, name, work, start, rating) VALUES
(1, 'http://localhost:5173/src/images/peopl1.png', 'Имя Фамилия', 'Студент курса «WEB-разработчик»', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!', '4,87 / 5'),
(2, 'http://localhost:5173/src/images/peopl2.png', 'Имя Фамилия', 'Студент курса «WEB-разработчик»', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!', '4,97 / 5'),
(3, 'http://localhost:5173/src/images/peopl3.png', 'Имя Фамилия', 'Студент курса «WEB-разработчик»', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!', '3,99 / 5'),
(4, 'http://localhost:5173/src/images/peopl4.png', 'Имя Фамилия', 'Студент курса «WEB-разработчик»', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!', '5,00 / 5'),
(5, 'http://localhost:5173/src/images/peopl5.png', 'Имя Фамилия', 'Студент курса «WEB-разработчик»', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!', '4,07 / 5'),
(6, 'http://localhost:5173/src/images/peopl6.png', 'Имя Фамилия', 'Студент курса «WEB-разработчик»', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!', '3,87 / 5'),
(7, 'http://localhost:5173/src/images/peopl7.png', 'Имя Фамилия', 'Студент курса «WEB-разработчик»', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!', '4,87 / 5'),
(8, 'http://localhost:5173/src/images/peopl8.png', 'Имя Фамилия', 'Студент курса «WEB-разработчик»', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id tristique lorem placerat!', '4,44 / 5');

CREATE TABLE chess (
    id SERIAL PRIMARY KEY,
    img varchar,
    name varchar,
    info varchar
);

INSERT INTO chess (id, img, name, info) VALUES
(1, 'http://localhost:5173/src/images/chess1.png', 'Цель 1', 'Привить любовь и интерес к шахматам'),
(2, 'http://localhost:5173/src/images/chess2.png', 'Цель 2', 'Получить удовольствие от процесса игры, от факта победы в партии, от спасения'),
(3, 'http://localhost:5173/src/images/chess3.png', 'Цель 3', 'Научить анализировать свои и чужие ошибки, учиться на них с помощью GM мирового уровня'),
(4, 'http://localhost:5173/src/images/chess4.png', 'Цель 4', 'Получить удовольствие от процесса игры, от факта победы в партии, от спасения');

CREATE TABLE preim (
    id SERIAL PRIMARY KEY,
    img varchar,
    text varchar
);

INSERT INTO preim (id, img, text) VALUES
(1, 'http://localhost:5173/src/images/gradient1.png', 'Интересные уроки по шахматам'),
(2, 'http://localhost:5173/src/images/gradient2.png', 'Шахматы для взрослых и детей'),
(3, 'http://localhost:5173/src/images/gradient3.png', 'Обучение шахмат онлайн'),
(4, 'http://localhost:5173/src/images/gradient4.png', 'Профессиональное обучение шахматам'),
(5, 'http://localhost:5173/src/images/gradient5.png', 'Шахматные турниры'),
(6, 'http://localhost:5173/src/images/gradient6.png', 'Сеанс одновременной игры с GM');

CREATE TABLE prepods (
    id SERIAL PRIMARY KEY,
    foto varchar,
    name varchar,
    info varchar
);

INSERT INTO prepods (id, foto, name, info) VALUES
(1, 'http://localhost:5173/src/images/foto1.png', 'Имя Фамилия', 'Выпускник Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.'),
(2, 'http://localhost:5173/src/images/foto2.png', 'Имя Фамилия', 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.'),
(3, 'http://localhost:5173/src/images/foto3.png', 'Имя Фамилия', 'Выпускник Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.'),
(4, 'http://localhost:5173/src/images/foto4.png', 'Имя Фамилия', 'Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.');

CREATE TABLE programs (
    id SERIAL PRIMARY KEY,
    name varchar,
    text varchar,
    time varchar
);

INSERT INTO programs (id, name, text, time) VALUES
(1, 'Заголовок мероприятия', 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя', '20 ноября 2022'),
(2, 'Разработка мобильных приложений', 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя', '16 ноября 2021'),
(3, 'Заголовок мероприятия', 'Краткий анонс мероприятия в нескольких предложениях. Текст, который будет заинтересовывать пользователя', '10 ноября 2024');

CREATE TABLE news (
    id SERIAL PRIMARY KEY,
    img varchar,
    data varchar,
    headline varchar,
    info varchar
);

INSERT INTO news (id, img, data, headline, info) VALUES
(1, 'http://localhost:5173/src/images/neww1.png', '16 ноября 2021', 'Заголовок новости', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.'),
(2, 'http://localhost:5173/src/images/neww2.png', '29 ноября 2021', 'Заголовок новости', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.'),
(3, 'http://localhost:5173/src/images/neww3.png', '16 ноября 2021', 'Заголовок новости', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.'),
(4, 'http://localhost:5173/src/images/neww4.png', '10 ноября 2021', 'Заголовок новости', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.'),
(5, 'http://localhost:5173/src/images/neww5.png', '22 ноября 2021', 'Заголовок новости', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.'),
(6, 'http://localhost:5173/src/images/neww6.png', '09 ноября 2021', 'Заголовок новости', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus.');
