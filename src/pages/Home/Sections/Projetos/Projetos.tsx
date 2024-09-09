import styled from "@emotion/styled"
import theme from "../../../../theme"
import { Typography } from "@mui/material";


const Projetos = () => {
 
    // Section
    const StyledProjetos = styled("div")({
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: "flex",
      justifyContent: "Center",
      padding: "10px"
    });

    const StyledTitle = styled(Typography)({
      fontSize: "3rem",
      height: "20px",
      fontWeight: "bold",
      paddingBottom: "6rem"
    });
  
    const Conteiner = styled("div")({
    });
  
    return (
      <StyledProjetos id="projetos">
        
        <StyledTitle>
          Projetos
        </StyledTitle>

        <Conteiner>

        </Conteiner>




      </StyledProjetos>
    );
  }
  
  export default Projetos;
