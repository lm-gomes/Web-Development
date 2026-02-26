import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import InputData from '../../components/InputData';
function Register(){

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userRegister = e.target.userRegister.value;
        const userRegPassword = e.target.userRegPassword.value;

        console.log("Login:" + userRegister)
        console.log("Senha:" + userRegPassword)

        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: userRegister,
                senha: userRegPassword
                })
            });

        const data = await response.json();
        if(data.success === true){
            console.log("Cadastro realizado!");
        }
        else{
            console.log("Falha ao cadastrar usuario...");
        }



    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <InputData title={'Login de registro'} type='text' classname={'userLogin'} name='userRegister' placeholder={'Registro'}/>
                <InputData title={'Senha de registro'} type='password' classname={'userLogin'} name='userRegPassword' placeholder={'Senha'}/>
                <button style={{width: '20%', height: '50vh'}} type='submit'>CLICA</button>
             </form>
        </div>
    );
}

export default Register;

