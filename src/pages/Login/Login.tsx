import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { AuthContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import './Login.scss'

export const Login = () => {

  const navigate = useNavigate();
  const { user, handleLogin, isLogged, forgotPassword } = useContext(AuthContext)
  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  const [showInputForgot, setShowInputForgot] = useState<boolean>(false)
  const [emailForgot, setEmailForgot] = useState<string>('')

  const onSubmit = async (e: any, data: any) => {
    await handleLogin(e, data)
  }

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged]);

  async function handleForgotPassword(e: any, email: any){
    if(await forgotPassword(e,email) === true){
      setShowInputForgot(false)
    }
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="header-login">
          <h1>Login</h1>
        </div>
        {showInputForgot === false &&
          <div className="form-login">
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="input-text">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Insira seu email"
                  autoComplete="username"
                  {...register("email", { required: "O email deve ser fornecido" })}
                />
                <ErrorMessage errors={errors} name="email" />
              </div>
              <div className="input-text">
                <label htmlFor="email">Senha:</label>
                <input
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  placeholder="Insira sua senha"
                  {...register("password", { required: "O password deve ser fornecido", maxLength: 20 })}
                />
                <ErrorMessage errors={errors} name="password" />
              </div>
              <div className='input-button'>
                <button type='submit'>Login</button>
                <span>ou</span>
                <button
                  type="button"
                  onClick={() => navigate('cadastro')}
                >Cadastre-se</button>
              </div>
            </form>
            <div style={{display:"flex", justifyContent:"center"}}>
              <span style={{ textDecoration: 'underline' }}
                onClick={() => setShowInputForgot(true)}
              > Esqueci a senha
              </span>
            </div>
          </div>
        }


        {showInputForgot &&
          <div style={{ display: "flex", flexDirection: "column", gap:"20px"}}>
            <form onSubmit={e => handleForgotPassword(e,emailForgot)}>
              <div className="input-text">
                <label htmlFor="email">E-mail cadastrado:</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Insira seu email"
                  autoComplete="username"
                  value={emailForgot}
                  onChange={e => setEmailForgot(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button type='submit'>Enviar</button>
              </div>
            </form>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span
                onClick={() => setShowInputForgot(false)}
              >Voltar</span>
            </div>
          </div>
        }
      </div>

    </div>
  )
}