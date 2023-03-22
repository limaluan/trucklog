import { Header } from "../components/ClientPanel/Header";

interface IClientPanelLayoutProps {
  children: React.ReactNode;
}

export const ClientPanelLayout = ({ children }: IClientPanelLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
