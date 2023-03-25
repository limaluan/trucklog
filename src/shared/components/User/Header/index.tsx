import { HeaderContainer } from "./styles";

interface IHeaderProps {
  handleOpenSidenav: () => void;
}

export const Header = ({ handleOpenSidenav }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <i className="ph ph-list" onClick={handleOpenSidenav}></i>
      <h1>Dashboard</h1>
    </HeaderContainer>
  );
};
