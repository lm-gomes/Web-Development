import {useState} from 'react'
import './inputdata.css'


function InputData({title, classname, name, type, placeholder}){
    return(
        <div className='main-div'>
            <p>{title}</p>
            <input className={classname} type={type} placeholder={placeholder} name={name}></input>
        </div>
    );
}

export default InputData