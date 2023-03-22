import { LandingPageContainer } from "./styles";
import logoImg from "../../assets/truck-log-logo.svg";
import notebookManImg from "../../assets/notebook-man.svg";
import backgroundObjectImg from "../../assets/bg-item1.svg";
import backgroundWorld from "../../assets/bg-world.svg";

import taskgoLogoImg from "../../assets/taskgo-logo.png";
import dbcLogoImg from "../../assets/dbc-logo.svg";
import singularLogoImg from "../../assets/singular-logo.png";
import houseLogoImg from "../../assets/house-logo.svg";
import fibrasulLogoImg from "../../assets/fibrasul-logo.svg";

import pathIconImg from "../../assets/path-icon.svg";
import gasIconImg from "../../assets/gas-pump-icon.svg";
import cameraIconImg from "../../assets/video-camera-icon.svg";

import formsPersonImg from "../../assets/forms-person.svg";

import snapFingerImg from "../../assets/easy-to-use-icon.png";

export const LandingPage = () => {
  return (
    <LandingPageContainer>
      <header className="container">
        <div className="header content">
          <img src={logoImg} alt="Caminhão verde da TruckLog" />
          <img
            className="backgroundObject"
            src={backgroundObjectImg}
            alt=""
            aria-hidden
          />
          <nav className="header-nav">
            <a href="#">Nossos Dados</a>
            <a href="#">Como funciona</a>
            <a href="#">Benefícios</a>
            <a href="#">FAQ</a>
          </nav>
          <button>Faça Login</button>
        </div>
      </header>

      <section className="container">
        <div className="intro content">
          <div className="text-section">
            <h1>O MAIOR E MAIS RENTÁVEL APP DE GESTÃO DE FROTAS</h1>
            <p>
              O TruckLog é um app perfeito para você empresário que busca
              controlar as suas frotas, além de trazer inúmeros benefícios ao
              adquirir nossos serviços.
            </p>
            <button>Saiba mais</button>
          </div>
          <img src={notebookManImg} alt="Homem usando Notebook" />
          <img
            src={backgroundWorld}
            className="backgroundObject"
            alt=""
            aria-hidden
          />
        </div>
      </section>

      <section className="partners container">
        <div className="partners">
          <div className="text-section">
            <h1 className="title">Parceiros</h1>
            <h2 className="subtitle">Eles também contam conosco</h2>
          </div>
          <div className="cards">
            <div className="card">
              <img src={taskgoLogoImg} alt="TaskGo Logo" />
            </div>
            <div className="card">
              <img src={dbcLogoImg} alt="DBC Logo" />
            </div>
            <div className="card">
              <img src={singularLogoImg} alt="Singular Logo" />
            </div>
            <div className="card">
              <img src={houseLogoImg} alt="House Logo" />
            </div>
            <div className="card">
              <img src={fibrasulLogoImg} alt="Fibrasul Logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="data content">
          <div className="text-section">
            <h1 className="title">Nossos Dados</h1>
            <h2 className="subtitle">
              Entenda o nosso sucesso representado em números
            </h2>
          </div>
          <div className="cards">
            <div className="card">
              <h2>
                <i
                  className="ph-plus-fill"
                  title="ícone com um sinal de adição"
                ></i>
                <span>200</span>
                <i className="ph-users" title="ícone representando pessoas"></i>
              </h2>
              <p>Clientes Registrados</p>
            </div>
            <div className="card">
              <h2>
                <i
                  className="ph-plus-fill"
                  title="ícone com um sinal de adição"
                ></i>
                <span>10K</span>
                <i
                  className="ph-gas-pump"
                  title="ícone representando um combustível"
                ></i>
              </h2>
              <p>Economizados em Combustível</p>
            </div>
            <div className="card">
              <h2>
                <i
                  className="ph-plus-fill"
                  title="ícone com um sinal de adição"
                ></i>
                <span>200</span>
                <i
                  className="ph-money"
                  title="ícone representando dinheiro"
                ></i>
              </h2>
              <p>Clientes Registrados</p>
            </div>
          </div>
          <div className="data"></div>
        </div>
      </section>

      <section className="work container">
        <div className="work content">
          <div className="text-section">
            <h1 className="title">Como funciona</h1>
            <h2 className="subtitle">
              Entenda como nosso sistema funciona e como podemos te ajudar
            </h2>
          </div>
          <div className="cards">
            <div className="card">
              <div className="image-box">
                <img src={pathIconImg} alt="Ícone de rotas" />
              </div>
              <h4>Controle de rotas</h4>
              <p>
                Com simples cliques você pode acompanhar, e controlar, a rota de
                seus caminhões, e aproveitar do nosso diferencial: sugestões de
                rotas em tempo real.
              </p>
            </div>

            <div className="separator" />

            <div className="card">
              <div className="image-box">
                <img src={gasIconImg} alt="Ícone de bomba de gasolina" />
              </div>
              <h4>Controle de abastecimento</h4>
              <p>
                Algum dos seus caminhões ficou sem gasolina no meio do nada?
                Isso é impossível conosco! Temos diversas soluções para não te
                deixar na mão quando você mais precisar.
              </p>
            </div>

            <div className="separator" />

            <div className="card">
              <div className="image-box">
                <img src={cameraIconImg} alt="Ícone de camera" />
              </div>
              <h4>Monitoramento em tempo real</h4>
              <p>
                Com nosso sistema de monitoramento em tempo real você pode
                acompanhar a rota do seu caminhão e saber exatamente onde ele
                está. Além disso, você pode acompanhar o desempenho do motorista
                e saber se ele está dirigindo de forma segura.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="forms-section content">
          <div className="text-section">
            <div>
              <h1 className="title">Se interessou?</h1>
              <h2 className="subtitle">
                Preencha o formulário e entraremos em contato.
              </h2>
            </div>
            <img src={formsPersonImg} alt="" />
          </div>

          <form>
            <div>
              <label>
                <i className="ph-user"></i>Seu nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Digite aqui seu nome"
                required
              />
            </div>

            <div>
              <label>
                <i className="ph-envelope"></i>Seu e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Digite aqui seu e-mail"
                required
              />
            </div>

            <p>
              <input type="checkbox" /> Desejo receber emails sobre lançamentos
              e correções do sistema
            </p>

            <button>Enviar</button>
          </form>
        </div>
      </section>

      <section className="benefits container">
        <div className="benefits content">
          <div>
            <h1 className="title">Principais Benefícios</h1>
            <h2 className="subtitle">
              O que a TruckLog pode agregar na sua empresa
            </h2>
          </div>
          <div className="grid">
            <div>
              <img src={snapFingerImg} alt="" />
              <h1>Facilidade</h1>
              <p>
                Com uma interface intuitiva e de fácil controle você ganha
                tempo.
              </p>
            </div>
            <div>
              <i className="ph-shield-check"></i>
              <h1>Segurança</h1>
              <p>
                Com o controle das frotas você monitora em tempo real seus
                veículos.
              </p>
            </div>
            <div>
              <i className="ph-gear"></i>
              <h1>Simplicidade</h1>
              <p>
                Recursos selecionados e pensandos minuciosamente para o seu
                negócio.
              </p>
            </div>
            <div>
              <i className="ph-truck"></i>
              <h1>Mobilidade</h1>
              <p>
                São inúmeros postos para abastecer e parceiros de mobilidade
                para deslocamento e serviços.
              </p>
            </div>
            <div>
              <i className="ph-presentation-chart"></i>
              <h1>Registros</h1>
              <p>
                Com gráficos e linhas do tempo você acompanha a evolução do seu
                negócio.
              </p>
            </div>
            <div>
              <i className="ph-chart-line-up"></i>
              <h1>Escalabilidade</h1>
              <p>
                O TruckLog facilita, promove segurança, praticidade, mobilidade
                e acesso a registos para escalar o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="container">
        <div className="footer content">
          <ul>
            <li>
              <a href="#">Benefícios</a>
            </li>
            <li>
              <a href="#">Dados</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">
                <img src={logoImg} alt="" />
              </a>
            </li>
            <li>
              <a href="#">Parceiros</a>
            </li>
            <li>
              <a href="#">Taxas</a>
            </li>
            <li>
              <a href="#">Contrate</a>
            </li>
          </ul>
          <hr />
          <p>
            2010 - 2022 <a href="#">Privacy - Terms</a>
          </p>
        </div>
      </footer>
    </LandingPageContainer>
  );
};
