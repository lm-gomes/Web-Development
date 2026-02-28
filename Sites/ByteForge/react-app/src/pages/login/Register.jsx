import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import InputData from '../../components/InputData';
import illustration from '../../img/tech company-bro.svg'
import './register.css'

function Register(){

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userRegLogin = e.target.userRegLogin.value;
        const userRegPassword = e.target.userRegPassword.value;
        const userRegPasswordConfirm = e.target.userRegPasswordConfirm.value;
        const userRegEmail = e.target.userRegEmail.value;
        const userRegEmailConfirm = e.target.userRegEmailConfirm.value;

        if(userRegPassword != userRegPasswordConfirm){
            alert("As senhas devem ser iguais.");
        }
        if(userRegEmail != userRegEmailConfirm){
            alert("Os e-mails devem ser iguais.")
        }

        console.log("Login:" + userRegLogin)
        console.log("Senha:" + userRegPassword)

        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: userRegLogin,
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
        <div className='body'>
            <section className='login-section'>
                <div className='title'>
                    <h1 className="b1">BYTE</h1><h1 className='b2'>FORGE</h1>
                </div>
                <div className='login-div'>
                    <h1>Crie sua conta!</h1><br/><br/>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <div className='inputs-form'>
                            <InputData title={'Digite seu E-Mail:'} type='text' classname={'userLogin'} name='userRegEmail' placeholder={'Registro'}/>
                            <InputData title={'Confirme o E-Mail:'} type='text' classname={'userLogin'} name='userRegEmailConfirm' placeholder={'Registro'}/>
                            <InputData title={'Login: '} type='text' classname={'userLogin'} name='userRegLogin' placeholder={'Registro'}/>
                            <InputData title={'Senha'} type='password' classname={'userLogin'} name='userRegPassword' placeholder={'Senha'}/>
                            <InputData title={'Confirme a senha:'} type='password' classname={'userLogin'} name='userRegPasswordConfirm' placeholder={'Senha'}/>
                        </div>
                        <div className='button-text'>
                            <button className="button" type='submit'>Cadastrar</button>
                            <div className='new-account'>
                                <p>Já possui uma conta?</p>
                                <p style={{cursor: 'pointer'}} onClick={() => navigate('/login')}>Clique aqui acessá-la</p>
                            </div>
                        </div>
                    </form>

                </div>
            </section>
            <aside className='side-image'>
                <figure className='image-figure'>
                    <img className='illustration' src={illustration}></img>
                </figure>
            </aside>
        </div>
    );
}

export default Register;

