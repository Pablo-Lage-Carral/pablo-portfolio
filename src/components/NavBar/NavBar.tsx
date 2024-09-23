
import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";
import { Link } from "react-scroll"; // Importação do react-scroll para navegação suave

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
}));

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Link to="sobre" smooth={true} duration={900}>
          <MenuItem>Sobre</MenuItem>
        </Link>
        <Link to="habilidades" smooth={true} duration={900}>
          <MenuItem>Habilidades</MenuItem>
        </Link>
        <Link to="projetos" smooth={true} duration={900}>
          <MenuItem>Projetos</MenuItem>
        </Link>
        <Link to="Contate" smooth={true} duration={900}>
          <MenuItem>Contato</MenuItem>
        </Link>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
