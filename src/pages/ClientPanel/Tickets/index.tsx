import { TicketsContainer } from "./styles";

import ticketsEmptyImg from "../../../assets/tickets-empty.svg";
import { ClientPanelLayout } from "../../../shared/layouts/ClientPanelLayout";

export const Tickets = () => {
  return (
    <ClientPanelLayout>
      <TicketsContainer>
        <main className="content">
          <div className="user-trail">
            <span>Meu Painel</span>
            <span>{" > "}</span>
            <span>Tickets</span>
            <span>{" > "}</span>
            <span>Abertos</span>
          </div>
          <h2>Meus Tickets</h2>
          <div className="empty-section">
            <img src={ticketsEmptyImg} alt="Ícone de seção vazia" />
            <h2>Você ainda não possui tickets abertos</h2>
            <p>Envie seu próprio ticket</p>
            <button>Abra um novo ticket</button>
          </div>
        </main>
      </TicketsContainer>
    </ClientPanelLayout>
  );
};
