import styled from "@emotion/styled";
import theme from "../../../../theme";
import { Typography, Card, CardContent } from "@mui/material";

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
    justifyContent: "center",
  });

  const StyledCard = styled(Card)({
    margin: "20px 0",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  });

  const StyledCardContent = styled(CardContent)({
    textAlign: "center",
  });

  return (
    <StyledProjetos id="projetos">
      <StyledTitle>
        Projetos
      </StyledTitle>

      {/* Exemplo de projeto */}
      <StyledCard>
        <StyledCardContent>
          <Typography variant="h5" component="div">
            Nome do Projeto
          </Typography>
          <Typography variant="body2">
            Descrição breve do projeto. Aqui você pode falar sobre os principais recursos e objetivos.
          </Typography>
        </StyledCardContent>
      </StyledCard>

      {/* Adicione mais cartões conforme necessário */}
      <StyledCard>
        <StyledCardContent>
          <Typography variant="h5" component="div">
            Outro Projeto
          </Typography>
          <Typography variant="body2">
            Descrição breve deste projeto. Fale sobre o que ele realiza.
          </Typography>
        </StyledCardContent>
      </StyledCard>

    </StyledProjetos>
  );
}

export default Projetos;
