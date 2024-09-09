/*import styled from "@emotion/styled"


const Habilidades = () => {
    
    const StyledHabilidades = styled("div")(() => ({
        background: "grey",
        height: "100vh"
    }))

    
    return (
        <>
            <StyledHabilidades>
                
            </StyledHabilidades>
        </>
      )
}
    
    export default Habilidades

*/




import styled from "@emotion/styled";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import theme from "../../../../theme";


const Habilidades = () => {

  //Section
  const StyledHabilidades = styled("div")(() => ({
    background: "grey",
    height: "100vh",
    display: "flex",
    justifyContent: "center"
    
  }));

  //Card
  const StyledCard = styled(Card)(() => ({
    backgroundColor: theme.palette.secondary.main,
    width: '100%',
    maxWidth: '200px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',          // Animação para efeito ao passar o mouse
    '&:hover': {
      transform: 'scale(1.35)',                 // Aumenta o Card quando o mouse passa por cima
    }
  }));

  //Card Com Texto
  const StyledCardContent = styled(CardContent)({
    textAlign: "center"
  });

  //Estilo do Texto
  const StyledTypography = styled(Typography)({
    variant: "h5",
    fontSize: "2rem",
    fontFamily: "Raleway, Arial",
    width: "100%",

  });

  // Estilo do Título
  const StyledTitle = styled(Typography)(() => ({
    fontSize: "3rem",
    height: "20px",
    fontWeight: "bold",
    color: theme.palette.primary.main
  }));


  return (
  
    <StyledHabilidades id="habilidades">

      <StyledTitle>
        HABILIDADES
      </StyledTitle>

      <Grid>



        <Grid item xs={10} md={4}>
          <StyledCard>
            <StyledCardContent>
              <StyledTypography>
                React
              </StyledTypography>
            </StyledCardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={10} md={4}>
          <StyledCard>
            <StyledCardContent>
              <StyledTypography>
                TypeScript
              </StyledTypography>
            </StyledCardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={10} md={4}>
          <StyledCard>
            <StyledCardContent>
              <StyledTypography>
                Python
              </StyledTypography>
            </StyledCardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={10} md={4}>
          <StyledCard>
            <StyledCardContent>
              <StyledTypography>
                DevOps
              </StyledTypography>
            </StyledCardContent>
          </StyledCard>
        </Grid>

      </Grid>

      

    </StyledHabilidades>
  );
};

export default Habilidades;

