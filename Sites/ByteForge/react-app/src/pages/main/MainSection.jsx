import { useState } from "react";

import slide1 from '../../img/last_news.jpg';
import slide2 from '../../img/robot.jpg'
import slide3 from '../../img/oculus.jpg'
import news from '../../img/news.jpg'
import './mainsection.css';


function Main(){

    const [current, setCurrent] = useState(0)
    const slides = [slide1, slide2, slide3];
    const texts = ['Empresa adota semana de quatro dias e registra aumento de 30% na produtividade.',
        'Nova geração de robôs industriais aprende tarefas complexas em menos de duas horas de treinamento.',
        'Óculos VR lançado hoje promete simular ambientes reais com latência imperceptível ao cérebro humano.'
    ]

    return(
        <div className="main">
            <section className="first-section">
                <div className="img-container">
                    <img src={slides[current]} className="lastnews"></img>
                    <p className="lastnews-text">{texts[current]}</p>
                    <div className="black"></div>
                    <button className="left-button" onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)}></button>
                    <button className="right-button" onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)}></button>
                </div>
            </section>
            <section className="second-section">
                <div className="sec-section-div">
                    <figure className="main-news-figure">
                        <h2>Últimas notícias</h2>
                        <img className="news-img" src={news}></img>
                    </figure>
                    <div className="news-text">
                        <div className="news-text-div">
                            <h2>Título da notícia</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laudantium excepturi ut similique odio blanditiis quae ex illum asperiores, hic deleniti debitis autem quod qui, eveniet aut ipsa consequatur eligendi.</p>
                        </div>
                        <div className="news-figure-div">
                            <figure className="news-figure"></figure>
                            <figure className="news-figure"></figure>
                            <figure className="news-figure"></figure>
                            <figure className="news-figure"></figure>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main