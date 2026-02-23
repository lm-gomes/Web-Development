import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import illustration from '../../img/tech company-bro.svg'
import './login.css'

function Login(){
    const navigate = useNavigate();
    const [loginSuccess, setLoginSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userLogin = e.target.userLogin.value;
        const userPassword = e.target.userSenha.value;

        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: userLogin,
                senha: userPassword
            })
        });

        const data = await response.json();

        if(data.success === true){
            console.log('Login bem-sucedido');
            setLoginSuccess(true);
            setTimeout(() => navigate('/'), 2000);

        } else{
            console.log('Login falhou');
            setLoginSuccess(false);
            setTimeout(() => setLoginSuccess(null), 2000);
        }
    }

    return(
    <div className='body'>
        {loginSuccess && (
            <div className='login-success'>
                <h1>Login bem-sucedido!</h1>
            </div>
        )}

        {loginSuccess == false && (
            <div className='login-success'>
                <h1>Login ou senha incorreto!</h1>
            </div>
         )
        }


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