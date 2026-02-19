import { useState } from "react";
import slide1 from '../../img/last_news.jpg';
import slide2 from '../../img/robot.jpg'
import slide3 from '../../img/oculus.jpg'
import illustration from '../../img/illustration.jpg'
import course from '../../img/course.jpg'
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
                    <figure className="img-course-div">
                        <img className="img-course"src={course}></img>
                    </figure>
                    <div className="text-course">
                        <h2>Cursos</h2>
                        <p className="course-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat, ipsam doloribus sint, quaerat, ullam veniam voluptatem debitis hic nesciunt nostrum animi molestias sequi ex repellendus! Animi dolor possimus odit?</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main