import {useState} from 'react'
import './header.css'

function Header(){


    return(
        <div className="header-div">
            <header>
                <h1 className="b1">BYTE</h1><h1 className='b2'>FORGE</h1>
            </header>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>PRODUTOS</li>
                    <li>NOTICIAS</li>
                    <li>SOBRE</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header