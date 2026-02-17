import { useState } from "react";
import slide1 from '../../img/last_news.jpg';
import slide2 from '../../img/robot.jpg'
import slide3 from '../../img/oculus.jpg'
import './mainsection.css';


function Main(){

    const [current, setCurrent] = useState(0)
    const slides = [slide1, slide2, slide3];
    const texts = ['Empresa adota semana de quatro dias e registra aumento de 30% na produtividade.',
        'Nova geração de robôs industriais aprende tarefas complexas em menos de duas horas de treinamento.',
        'Óculos VR lançado hoje promete simular ambientes reais com latência imperceptível ao cérebro humano.'
    ]

    return(
        <div>
            <section>
                <div className="img-container">
                    <img src={slides[current]} className="lastnews"></img>
                    <p className="lastnews-text">{texts[current]}</p>
                    <div className="black"></div>
                    <button className="left-button" onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)}></button>
                    <button className="right-button" onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)}></button>
                </div>
            </section>
            <section>
                
            </section>
        </div>
    );
}

export default Main