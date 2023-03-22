import { useState } from "react";
import { LoginContainer } from "./styles";

import truckImg from "../../assets/truck.png";
import bgObject1Img from "../../assets/bg-item3.svg";
import bgObject2Img from "../../assets/bg-item2.svg";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <LoginContainer>
      <div className="bg-items">
        <img className="bg-object1" src={bgObject1Img} alt="" />
        <img className="bg-object2" src={bgObject2Img} alt="" />
        <img className="bg-truck" src={truckImg} alt="" />
      </div>
      <form>
        {isLogin ? (
          <div className="form-section login">
            <h1>Login</h1>
            <h3>Insira seus dados de acesso:</h3>
            <div className="input-container">
              <i className="ph ph-envelope"></i>
              <input type="text" placeholder="E-mail" />
            </div>
            <div className="input-container">
              <i className="ph ph-lock-key"></i>
              <input type="password" placeholder="Senha" />
            </div>
            <a href="#">Esqueceu sua senha?</a>
            <div className="button-section">
              <a href="#" onClick={() => setIsLogin(false)}>
                Ainda não possui uma conta?
              </a>
              <button type="submit">
                Entrar <i className="ph ph-sign-in"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="form-section signup">
            <h1>Crie sua conta</h1>
            <h3>Insira os dados necessários:</h3>
            <div className="input-container">
              <i className="ph ph-envelope"></i>
              <input type="text" placeholder="E-mail" />
            </div>
            <div className="input-container">
              <i className="ph ph-lock-key"></i>
              <input type="password" placeholder="Senha" />
            </div>
            <p>
              Sua senha deve ter no mínimo 8 caracteres, entre eles: números e
              símbolos
            </p>
            <div className="input-container">
              <i className="ph ph-phone"></i>
              <input type="tel" placeholder="(00) 00000-0000" />
            </div>
            <div className="button-section">
              <a href="#" onClick={() => setIsLogin(true)}>
                Já possui conta?
              </a>
              <button type="submit">Criar</button>
            </div>
          </div>
        )}
      </form>
    </LoginContainer>
  );
};
