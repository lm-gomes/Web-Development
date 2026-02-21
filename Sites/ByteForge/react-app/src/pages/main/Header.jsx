import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import './header.css'

function Header(){
    const navigate = useNavigate();

    return(

        <div className="header-div">
            <header>
                <h1 className="b1">BYTE</h1><h1 className='b2'>FORGE</h1>
            </header>
            <nav>
                <ul>
                    <li onClick={() => navigate('/')}>HOME</li>
                    <li onClick={() => navigate('/')}>PRODUTOS</li>
                    <li onClick={() => navigate('/')}>NOTICIAS</li>
                    <li onClick={() => navigate('/about')}>SOBRE</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header