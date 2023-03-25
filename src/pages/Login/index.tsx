import { useContext, useState } from "react";
import { LoginContainer } from "./styles";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../shared/context/AuthContext";
import truckImg from "../../assets/truck.png";
import bgObject1Img from "../../assets/bg-item3.svg";
import bgObject2Img from "../../assets/bg-item2.svg";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const { handleLogin } = useContext(AuthContext);

  return (
    <LoginContainer>
      <div className="bg-items">
        <img className="bg-object1" src={bgObject1Img} alt="" />
        <img className="bg-object2" src={bgObject2Img} alt="" />
        <img
          className="bg-truck"
          src={truckImg}
          alt="imagem de uma caminhão em uma extremidade com a logo do trucklog"
        />
      </div>
      <form
        onSubmit={handleSubmit((data) =>
          handleLogin({
            login: data.login,
            senha: data.senha,
          })
        )}
      >
        <div className="form-section">
          <h1>Login</h1>
          <h3>Insira seus dados de acesso:</h3>

          <div className="input-container">
            <i className="ph ph-envelope"></i>
            <input
              type="text"
              placeholder="login"
              id="login"
              required
              {...register("login")}
            />
          </div>

          <div className="input-container">
            <i className="ph ph-lock-key"></i>
            <input
              type="password"
              id="senha"
              placeholder="senha"
              required
              {...register("senha")}
            />
          </div>

          <div className="button-section">
            <a href="#">Esqueceu sua senha?</a>
            {/* <a href="#" onClick={() => setIsLogin(false)}>
                Ainda não possui uma conta?
              </a> */}
            <button type="submit">
              Entrar <i className="ph ph-sign-in"></i>
            </button>
          </div>
        </div>
      </form>
    </LoginContainer>
  );
};
