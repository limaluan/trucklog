import dashboardImg from "../../../../assets/dashboard.svg";
import moneyImg from "../../../../assets/money.svg";
import ticketImg from "../../../../assets/tickets.svg";
import truckImg from "../../../../assets/truck.svg";
import { HeaderContainer } from "./styles";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <div className="header-content">
        <h3>#FIBR0223</h3>
        <ul className="nav-links">
          <li>
            <Link to="/cliente/dashboard">
              <img
                src={dashboardImg}
                className={location.pathname === "/cliente/dashboard" ? "selected" : ""}
                alt="Dashboard"
              />
              Dashboard
            </Link>
          </li>
          <li>
            <a href="#">
              <img src={truckImg} alt="Caminhão" />
              Frotas
            </a>
          </li>
          <li>
            <Link
              to="/cliente/tickets"
              className={location.pathname === "/cliente/tickets" ? "selected" : ""}
            >
              <img src={ticketImg} alt="Tickets" />
              Tickets
            </Link>
          </li>
          <li>
            <a href="#">
              <img src={moneyImg} alt="Dinheiro" />
              Seu Negócio
            </a>
          </li>
        </ul>

        <div className="user-area">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>

          <div className="user">
            <div className="user-img"></div>
            <h4>Manoel</h4>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </div>
        </div>
      </div>
      <hr className="content" />
    </HeaderContainer>
  );
};
