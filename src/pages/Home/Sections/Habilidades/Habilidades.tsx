import styled from "@emotion/styled";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import theme from "../../../../theme";

const Habilidades = () => {

  // Section
  const StyledHabilidades = styled("div")({
    background: "grey",
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });

  // Card
  const StyledCard = styled(Card)(() => ({
    backgroundColor: theme.palette.secondary.main,
    width: "100%", // Garantir que o card ocupe 100% do espaço disponível
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)", // Menor escala para que o efeito de hover fique mais sutil
    },
  }));

  // Card Content
  const StyledCardContent = styled(CardContent)({
    textAlign: "center",
  });

  // Text Style
  const StyledTypography = styled(Typography)({
    variant: "h5",
    fontSize: "1.2rem", // Reduzir o tamanho da fonte para telas menores
    fontFamily: "Raleway, Arial",
    width: "100%",
  });

  // Title Style
  const StyledTitle = styled(Typography)(() => ({
    fontSize: "2.5rem", // Tamanho de fonte reduzido para ficar bem em mobile
    fontWeight: "bold",
    color: theme.palette.primary.main,
    paddingBottom: "3rem", // Menor padding
  }));

  // Container
  const Conteiner = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  // Buttons Container
  const StyleDivButtons = styled("div")({
    display: "flex",
    gap: "20px", // Diminuir o gap para que os cards caibam melhor
    flexWrap: "wrap", // Permitir que os cards quebrem para a linha seguinte
    justifyContent: "center",
  });

  return (
    <StyledHabilidades id="habilidades">
      <Conteiner>
        <StyledTitle>
          Habilidades
        </StyledTitle>

        <StyleDivButtons>
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <StyledTypography>React</StyledTypography>
              </StyledCardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <StyledTypography>TypeScript</StyledTypography>
              </StyledCardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <StyledTypography>Python</StyledTypography>
              </StyledCardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <StyledTypography>DevOps</StyledTypography>
              </StyledCardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <StyledTypography>Espanhol</StyledTypography>
              </StyledCardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <StyledTypography>Inglês</StyledTypography>
              </StyledCardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <StyledTypography>Automação</StyledTypography>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        </StyleDivButtons>
      </Conteiner>
    </StyledHabilidades>
  );
};

export default Habilidades;
