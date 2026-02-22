import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import illustration from '../../img/tech company-bro.svg'
import './login.css'

function Login(){
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userLogin = e.target.userLogin.value;
        const userPassword = e.target.userSenha.value;

        if(userLogin == 'admin' && userPassword == '123'){
            alert('Correto!');
            navigate('/');
        }
        else{
            alert('Incorreto');
        }
        
    }

    return(
    <div className='body'>
        <section className='login-section'>
            <div className='login-div'>
                <h1>Bem-vindo de volta!</h1>
                <form className='login-form' onSubmit={handleSubmit}>
                    <p>Login</p>
                    <input className="userLogin" type="text" placeholder='Login' name='userLogin'></input>
                    <p>Senha</p>
                    <input className="userLogin" type="password" placeholder='Senha' name='userSenha'></input>
                    <button className="button" type='submit'>Entrar</button>
                </form>
            </div>
        </section>
        <aside className='side-image'>
            <figure className='image-figure'>
                <img src={illustration}></img>
            </figure>
        </aside>
    </div>
    );
}

export default Login