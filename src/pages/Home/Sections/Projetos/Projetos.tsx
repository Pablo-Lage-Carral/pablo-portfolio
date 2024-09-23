import styled from "@emotion/styled";
import theme from "../../../../theme";
import { Typography, Card, CardContent, CardMedia, Button, Link } from "@mui/material";
import inteligencia from "../../../../assets/Images/inteligencia.jpg"
import futurista from "../../../../assets/Images/futurista.avif"


const Projetos = () => {
  // Section
  const StyledProjetos = styled("div")({
    backgroundColor: theme.palette.primary.main,
    height: "100dvh",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });

  const CardsContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", // Permite que os cards se ajustem em múltiplas linhas
    gap: "20px", // Espaçamento entre os cards
    width: "100%", // Garante que o container ocupe toda a largura disponível
  });

  const StyledTitle = styled(Typography)({
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "3rem", // Espaçamento abaixo do título
    textAlign: "center",
  });

  const StyledCard = styled(Card)({
    width: "300px", // Tamanho padrão dos cards
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  });

  const StyledCardContent = styled(CardContent)({
    textAlign: "center",
  });

  const StyledButton = styled(Button)({
    marginTop: "10px",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  });

  return (
    <StyledProjetos id="projetos">
      <StyledTitle color="primary.contrastText">
        Projetos
      </StyledTitle>

      <CardsContainer>
        {/* Exemplo de projeto */}
        <StyledCard>
          <CardMedia
            component="img"
            height="140"
            image={inteligencia} // Substitua pelo link da sua imagem
            alt="Imagem do Projeto"
          />
          <StyledCardContent>
            <Typography variant="h5" component="div">
              Outro Projeto
            </Typography>
            <Link 
              href="https://github.com/Pablo-Lage-Carral/React-IntegrandoTelas" 
              target="_blank" 
              rel="noopener noreferrer" // Para segurança ao abrir em nova aba
              style={{ textDecoration: 'none' }} // Remove o sublinhado do link
            >
              <StyledButton variant="contained">
                Me leve até lá
              </StyledButton>
            </Link>
          </StyledCardContent>
        </StyledCard>

        {/* Outro projeto com o botão de redirecionamento */}
        <StyledCard>
          <CardMedia
            component="img"
            height="140"
            image={futurista} // Substitua pelo link da sua imagem
            alt="Imagem do Projeto"
          />
          <StyledCardContent>
            <Typography variant="h5" component="div">
              Outro Projeto
            </Typography>
            <Link 
              href="https://github.com/Pablo-Lage-Carral/JAVA-CadastroSimples" 
              target="_blank" 
              rel="noopener noreferrer" // Para segurança ao abrir em nova aba
              style={{ textDecoration: 'none' }} // Remove o sublinhado do link
            >
              <StyledButton variant="contained">
                Me leve até lá
              </StyledButton>
            </Link>
          </StyledCardContent>
        </StyledCard>

        {/* Mais cards, se houver */}
      </CardsContainer>
    </StyledProjetos>
  );
};

export default Projetos;
