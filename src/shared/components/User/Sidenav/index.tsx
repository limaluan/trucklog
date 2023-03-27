import { useRef } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header";
import { SidenavContainer, SidenavContent } from "./styles";

interface ISidenavProps {
  children: React.ReactNode;
}

export const Sidenav = ({ children }: ISidenavProps) => {
  const sidenav = useRef<HTMLElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const handleToggleSidenav = () => {
    if (sidenav.current && container.current) {
      sidenav.current.classList.toggle("expanded");
      container.current.classList.toggle("expanded")
    }
  };

  return (
    <SidenavContainer>
      <Header handleOpenSidenav={handleToggleSidenav} />
      <div className="container" ref={container}>
        <SidenavContent className="expanded" ref={sidenav}>
          <h3 className="category">GERENCIAMENTO</h3>
          <Link to={"/usuario/viagens"} className="item">
            <i className="ph ph-path"></i> Viagens
          </Link>
          <Link to={"/usuario/motoristas"} className="item">
            <i className="ph ph-user"></i> Motoristas
          </Link>
          <Link to={""} className="item">
            <i className="ph ph-signpost"></i> Rotas
          </Link>
          <Link to={"/usuario/caminhoes"} className="item">
            <i className="ph ph-truck"></i> Caminhões
          </Link>
          <Link to={"/usuario/postos"} className="item">
            <i className="ph ph-gas-pump"></i> Postos
          </Link>
        </SidenavContent>
        {children}
      </div>
    </SidenavContainer>
  );
};
