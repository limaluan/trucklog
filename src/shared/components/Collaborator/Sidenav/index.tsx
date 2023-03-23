import { useRef } from "react";
import { Header } from "../Header";
import { SidenavContainer } from "./styles";

interface ISidenavProps {
  children: React.ReactNode;
}

export const Sidenav = ({ children }: ISidenavProps) => {
  const sidenav = useRef<HTMLElement>(null);

  const handleOpenSidenav = () => {
    
  };

  return (
    <>
      <Header handleOpenSidenav={handleOpenSidenav} />
      <div style={{ display: "flex" }}>
        <SidenavContainer ref={sidenav}>
          <h3 className="category">GERENCIAMENTO</h3>
          <h3 className="item">
            <i className="ph ph-path"></i> Viagens
          </h3>
          <h3 className="item">
            <i className="ph ph-user"></i> Motoristas
          </h3>
          <h3 className="item">
            <i className="ph ph-signpost"></i> Rotas
          </h3>
        </SidenavContainer>
        {children}
      </div>
    </>
  );
};
