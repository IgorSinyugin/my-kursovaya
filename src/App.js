import logo from './img/svg/logo.svg';
import search from './img/svg/search1.svg';
import burger from './img/svg/burger.svg';

import img1 from './img/afish/afish1.jpg';
import img2 from './img/afish/afish2.jpg';
import img3 from './img/afish/afish3.jpg';


import lamp from './img/svg/lamp.svg'
import background1 from './img/back1.png';
import background2 from './img/back2.jpg';
import React from 'react';
import { render } from 'react-dom';
import './App.css';

import CarouselCompound from './components/carousel-compound'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ListRender(props){
  const list = props.list;
  return (
      <ul>
      {list.map(elem=> (
          <a href="#" className="drop__link">{elem}</a>
      ))}
      </ul>
  );
};


export default function App() {
  return (
    <body>
      <header>
          <div className="wrapper__header">
              <div className="header__logo">
                  <div className="main__logo">
                      <img src={logo} alt="#" className="logo_img" />
                      <h2 className="logo__text">АНГТУ</h2>
                  </div>
                  <div className="boe">
                      <p>Ангарский Государственный Технический Университет</p>
                  </div>
              </div>
              <nav className="header__nav">
                <a href="#"><img src={search} alt="search" className="search__img"/></a>
                <a href="#"><img src={burger} alt="burger" className="burger"/></a>
                <div className="dropdown">
                    <a href="#" className="nav__link">Расписание &#173;</a>
                    <div className="dropdown-content">
                        <ListRender list={["Бакалавры","Магистранты","Экзамены"]}/>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="#" className="nav__link">университет &#173;</a>
                    <div className="dropdown-content">
                    <ListRender list={["контакты","адреса электронной почты","кафедры ангту","факультеты","научная библиотека","центр повышения квалификации","наука и инновации","отдел экологического проектирования","конкурсы и вакансии","служба содействия трудоустройству","реквизиты","информация министерства науки и высшего образования рф","проекты, гранты и конкурсы","меры противодействия коррупции","воспитательная работа","международное сотрудничество","условия обучения инвалидов и лиц с овз","обращения граждан и организаций в форме электронного документа в фгбоу во ангту","общежитие","информационная поддержка сотрудников и обучающихся по вопросам коронавирусной инфекции и организации дистанционного обучения","патриотический клуб фгбоу во «ангту»"]}/>  
                    </div>
                </div>
                <div className="dropdown">
                    <a href="#" className="nav__link">Абитуриентам &#173;</a>
                    <div className="dropdown-content">
                        <ListRender list={["приемная комиссия","информация о приеме","документы и справки","подать документы онлайн","для поступающих инвалидов","правила и условия приема","общежитие","вступительные испытания","списки поступающих","аспирантура","платные образовательные услуги","конкурсные списки","приказы","скидки для поступающих на платной основе","для поступающих из днр, лнр и украины","особенности приема по специальной квоте"]}/> 
                    </div>
                </div>
                <div className="dropdown">
                    <a href="#" className="nav__link">о нас &#173;</a>
                    <div className="dropdown-content">  
                        <ListRender list={["Основные сведения", "Структура и органы управления образовательной организацией", "Документы", "Образование", "Образовательные стандарты","Финансово-хозяйственная деятельность","Материально-техническое обеспечение и оснащенность образовательного процесса","Стипендии и иные виды материальной поддержки","Платные образовательные услуги","Руководство. Педагогический (научно-педагогический) состав","Вакантные места для приема (перевода)","Доступная среда","Международное сотрудничество","Среднемесячная заработная плата ректора, проректоров и главного бухгалтера"]}/>                   
                    </div>
                </div>
              </nav>
          </div>
      </header>
    <CarouselCompound>
        <CarouselCompound.Page className="Page1">
            <div className='item item-1 right'>
                <div className='item_text'>
                    <p className='text text-right'>Ангарский Университет Отмечает Свой 35 Юбилей </p>
                    <p className='under_text text-right'>25 декабря 1987 года была основана высшая учебная заведение в Иркутской области. Сегодня Ангарский государственный университет является одним из ведущих университетов Сибири и России, который предлагает широкий спектр образовательных программ и проводит множество научных исследований. </p>
                </div>
            </div>
        </CarouselCompound.Page>
        <CarouselCompound.Page className="Page1">
            <div className='item item-2 left'>
                <div className='item_text'>
                    <p className='text text-left'>В Ангарске состоялся ежегодный марафон для студентов </p>
                    <p className='under_text text-left'>Более 500 студентов из разных учебных заведений города собрались на стартовой линии, чтобы принять участие в мероприятии. Участники марафона преодолели дистанцию в 10 километров, проходя через самые красивые уголки города. В этом году марафон был посвящен памяти известного легкоатлета и олимпийского чемпиона, который родился в Ангарске и всю жизнь посвятил спорту.</p>
                </div>
            </div>
        </CarouselCompound.Page>
        <CarouselCompound.Page className="Page1">
            <div className='item item-3 center'>
                <div className='item_text'>
                    <p className='text'>Лучшие места для работы после окончания университета </p>
                    <div className='margin'>
                        <a href="#" className='button'>Попробовать!</a>
                    </div>
                </div>
            </div>
        </CarouselCompound.Page>
    </CarouselCompound>
    <div className='enroll'>
        <div className='enroll__items'>
            <div className='enroll__button'>
                <p className='little-text'>Хотите поступить?</p>
                <a className='doc_give' href='#'>Подать документы онлайн</a>
            </div>
            <div className='enroll__list'>
                <p className='list__text'>✔ Высокая стипендия</p>
                <p className='list__text'>✔ Множество технических направлений</p>
                <p className='list__text'> ✔ Востребованные профессии </p>
            </div>
        </div>
    </div>
    <div className='main'>
        <div className='Colum'>
            <p className='Title'>Разное</p>
            <a className='card' href='#'>Пушкинская карта</a>
            <a className='card' href='#'>Центр повышения квалификации и профессиональной переподготовки специалистов</a>
            <a className='card' href='#'>Горячая линия по оказанию психологической помощи</a>
            <a className='card' href='#'>Профилактика социально-негативных явлений в АнГТУ</a>
            <a className='card' href='#'>Меры по противодействию коррупции</a>
            <a className='card' href='#'>Профилактика экстремизма и терроризма в АнГТУ</a>
            <a className='card' href='#'>Гранты президента</a>
            <a className='card' href='#'>Ответственное лицо за психолого-педагогическое сопровождение обучающихся:
кандидат психологических наук, доцент Панчук Екатерина Юрьевна (epanchuk05@mail.ru, т. 8(3955)56-13-16).</a>
        </div>
        <div className='Colum'>
            <a className='card2' href='#'>Патриотический клуб <br/>ФГБОУ ВО “АнГТУ”</a>
            <a className='card2 smaller' href='#'> Проекты <br/>  Гранты <br/>Конкурсы <br/>  </a>

            <Carousel className='afisha' >
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
            
        </div>
        <div className='info__line'>

        
            <div className='news'>
                <h2 className='news__title'>Новости</h2>
                <input type='search' className='search' placeholder='Поиск' ></input>
                <div className='news__element'>
                    <div className='news__image ni0'>
                        <p>3 <br/>ноября</p>
                    </div>
                    <div className='news__info'>
                        <h3>Встреча с начальником отделения кадров 
    отдела вневедомственной охраны</h3>
                        <p>Приглашаем на встречу с начальником отделения кадров отдела вневедомственной охраны по городу Ангарску</p>
                    </div>
                </div>
                <div className='news__element'>
                    <div className='news__image ni1'>
                        <p>10 <br/>ноября</p>
                    </div>
                    <div className='news__info'>
                        <h3>Семенов И.А. - лауреат областного конкурса в сфере науки и техники 2022 года</h3>
                        <p>К.т.н., доцент кафедры Химической технологии топлива Ангарского государственного технического университета Семенов И.А... </p>
                    </div>
                </div>
                <div className='news__element'>
                    <div className='news__image ni2'>
                        <p>13 <br/>ноября</p>
                    </div>
                    <div className='news__info'>
                        <h3>Мультимедийное историческое путешествие по городу</h3>
                        <p>Приглашаем совершить мультимедийное историческое путешествие по городу. 14 февраля 2023г. в 14.00 4 амфитеатр.</p>
                    </div>
                </div>
                <div className='news__element'>
                    <div className='news__image ni3'>
                        <p>15 <br/>ноября</p>
                    </div>
                    <div className='news__info'>
                        <h3>Мультимедийное историческое путешествие по городу</h3>
                        <p>Приглашаем совершить мультимедийное историческое путешествие по городу. 14 февраля 2023г. в 14.00 4 амфитеатр</p>
                    </div>
                </div>

            </div>
            <div className='news'>
                <h2 className='news__title'>События</h2>
                <input type='search' className='search' placeholder='Поиск' ></input>
                <div className='news__element'>
                    <div className='news__image ni4'>
                        <p>15 <br/>ноября</p>
                    </div>
                    <div className='news__info'>
                        <h3>День Российских студенческих отрядов</h3>
                        <p>17 февраля - День Российских студенческих отрядов. Студенческий сервисный отряд АнГТУ "Поколение" приглашает на мероприятие, посвященное этому празднику.</p>
                    </div>
                </div>
                <div className='news__element'>
                    <div className='news__image ni2'>
                        <p>17 <br/>ноября</p>
                    </div>
                    <div className='news__info'>
                        <h3>Приглашение на мероприятия в Молодежный центр "Лифт"</h3>
                        <p>9 февраля 15.00 старт сезона интеллектуальной лиги «Квиз Хаус», участие бесплатное.10 февраля 16.00 марафон </p>
                    </div>
                </div>
                <div className='news__element'>
                    <div className='news__image ni1'>
                        <p>22 <br/>ноября</p>
                    </div>
                    <div className='news__info'>
                        <h3>Встреча с начальником отделения кадров 
    отдела вневедомственной охраны</h3>
                        <p>Приглашаем на встречу с начальником отделения кадров отдела вневедомственной охраны по городу Ангарску</p>
                    </div>
                </div>
                <div className='news__element'>
                    <div className='news__image ni3'>
                        <p>25 <br/>ноября</p>
                    </div>
                    <div className='news__info'>
                        <h3>Встреча с начальником отделения кадров 
    отдела вневедомственной охраны</h3>
                        <p>Приглашаем на встречу с начальником отделения кадров отдела вневедомственной охраны по городу Ангарску</p>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
    <footer className='footer'>
    <div className="header__logo">
        <div className="main__logo">
            <h2 className="logo__text">АНГТУ</h2>
        </div>
        <div className="boe">
            <p>Ангарский Государственный Технический Университет</p>
        </div>
    </div>
    <div className='info_angtu'>
        665835, Иркутская область, г. Ангарск, ул. Чайковского, д. 60 
    Пн-Пт 8:30 до 17:00
    Приемная ректора 8 (3955) 67-18-32
    Приемная комиссия 8(3955)67-34-17
    </div>
    </footer>
    </body>
  );
}

