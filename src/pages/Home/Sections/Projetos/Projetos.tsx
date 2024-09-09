import styled from "@emotion/styled"
import theme from "../../../../theme"


const Projetos = () => {
 
    // Section
    const StyledProjetos = styled("div")(() => ({
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: "flex",
      justifyContent: "space-between", // Espaça o conteúdo entre o topo e o fundo
      alignItems: "center", // Centraliza o conteúdo horizontalmente
    }));
  

  
    return (
      <StyledProjetos id="projetos">
        <div>
          Projetos
        </div>

      </StyledProjetos>
    );
  }
  
  export default Projetos;
