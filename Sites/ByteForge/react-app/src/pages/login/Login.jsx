import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import illustration from '../../img/tech company-bro.svg'
import './login.css'
import InputData from '../../components/InputData.jsx'

function Login(){
    const navigate = useNavigate();
    const [loginSuccess, setLoginSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userLogin = e.target.userLogin.value;
        const userPassword = e.target.userSenha.value;

        console.log("Login:" + userLogin)
        console.log("Senha:" + userPassword)

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
            <div className='title'>
                <h1 className="b1">BYTE</h1><h1 className='b2'>FORGE</h1>
            </div>
            <div className='login-div'>
                <h1>Bem-vindo de volta!</h1><br/><br/>
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='inputs-form'>
                        <InputData title='Login' classname='userLogin' name='userLogin' type='text' placeholder='Login'/>
                        <InputData title='Senha' classname='userLogin' name='userSenha' type='password' placeholder='Senha'/>
                    </div>
                    <button className="button" type='submit'>Entrar</button>
                    <div className='new-account'>
                        <p>Ainda não possui uma conta?</p>
                        <p style={{cursor: 'pointer'}} onClick={() => navigate('/register')}>Clique aqui para criar uma</p>
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

export default Login