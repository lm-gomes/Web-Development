import {useState} from 'react'
import './inputdata.css'


function InputData({title, classname, name, type, placeholder}){
    return(
        <div className='main-div'>
            <div className='input-divider'>
                <p>{title}</p>
                <input className={classname} type={type} placeholder={placeholder} name={name}></input>
            </div>
        </div>
    );
}

export default InputData