import styled from "@emotion/styled"
import theme from "../../../../theme"
import { Typography } from "@mui/material";


const Projetos = () => {
 
    // Section
    const StyledProjetos = styled("div")({
      backgroundColor: theme.palette.primary.main,
      height: "100dvh",
      padding: "50px",
    });

    const StyledTitle = styled(Typography)({
      fontSize: "3rem",
      height: "20px",
      fontWeight: "bold",
      paddingBottom: "6rem",
      display: "flex",
      justifyContent: "Center",

    });
  

  
    return (
      <StyledProjetos id="projetos">
        
        <StyledTitle>
          Projetos
        </StyledTitle>






      </StyledProjetos>
    );
  }
  
  export default Projetos;
