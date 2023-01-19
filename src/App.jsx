import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [erro, setErro] = useState("")

  const user = {
    email: email,
    password: password
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleValidator =  () => {
    login(user).then(console.log).catch(async err => {
       const erro = await err
       setErro(erro)
      })

    setTimeout(function() {
      setErro("")
    }, 3000)
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        
        <div className={erro.message ? 'errorMessage' :'errorMessage disable-div' }>
          <p>{erro.message}</p>
        </div>
        
        
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input onChange={handleEmail} id={'email'} type={'email'} value={email} autoComplete='off' />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input onChange={handlePassword} id={'password'} value={password} type={'password'} />
        </div>

        <div className='button'>
          {email.length < 10 || password.length < 6 ? 
          <button onClick={handleValidator} disabled>Login</button> :
          <button onClick={handleValidator} >Login</button>
          }
        </div>
      </div>
    </div>
  );
}
