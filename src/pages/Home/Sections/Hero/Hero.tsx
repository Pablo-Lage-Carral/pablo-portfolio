import { Box, Container, Grid, Link, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/Images/image.png";
import DownloadIcon from "@mui/icons-material/Download";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh", // Substituir height por minHeight para permitir expansão conforme necessário
    width: "100%", // Ajustar para 100% da largura disponível
    display: "flex",
    alignItems: "center",
    overflow: "hidden", // Evitar que o conteúdo ultrapasse a seção
    [theme.breakpoints.up("xs")]: {
      paddingTop: "1px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "10px",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  const StyledIconGitHub = styled("div")({
    display: "inline-block",
    padding: "10px",
    borderRadius: "100%",
    transition: "background-color 1.0s ease, transform 1.0s ease", // Transição suave

    "&:hover": {
      backgroundColor: "black", // Cor de fundo ao passar o mouse
      transform: "scale(1.2)", // Aumenta o ícone ao passar o mouse
    },
  });

  const StyledIconLinkedin = styled("div")({
    display: "inline-block",
    padding: "10px",
    borderRadius: "100%",
    transition: "background-color 1.0s ease, transform 1.0s ease", // Transição suave

    "&:hover": {
      backgroundColor: "blue", // Cor de fundo ao passar o mouse
      transform: "scale(1.2)", // Aumenta o ícone ao passar o mouse
    },
  });

  const StyledIconInstagram = styled("div")({
    display: "inline-block",
    padding: "10px",
    borderRadius: "100%",
    transition: "background-color 1.0s ease, transform 1.0s ease", // Transição suave

    "&:hover": {
      backgroundColor: "#E1306C", // Cor de fundo ao passar o mouse
      transform: "scale(1.2)", // Aumenta o ícone ao passar o mouse
    },
  });

  return (
    <>
      <StyledHero id="sobre">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={10} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"170%"} top={-150} right={-60}>
                  <AnimatedBackground />
                </Box>
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} />
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
                pb={2}
              >
                Pablo Lage Carral
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                Engenheiro de Software
              </Typography>

              <Box display="flex" justifyContent="center" gap={2} mt={2}>
                {/* GitHub Icon */}
                <StyledIconGitHub>
                  <Link
                    href="https://github.com/Pablo-Lage-Carral"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon style={{ fontSize: 40, color: "white" }} />
                  </Link>
                </StyledIconGitHub>

                <StyledIconLinkedin>
                  {/* LinkedIn Icon */}
                  <Link
                    href="https://www.linkedin.com/in/pablo-carral-806a88251/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                  </Link>
                </StyledIconLinkedin>

                <StyledIconInstagram>
                  {/* Instagram Icon */}
                  <Link
                    href="https://www.instagram.com/pnl_pablo/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                  </Link>
                </StyledIconInstagram>
              </Box>

              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                <Grid>
                  <Link href="/cv_pablo_carral.pdf" download>
                    <StyledButton
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                    >
                      <DownloadIcon />
                      <Typography>Download CV</Typography>
                    </StyledButton>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
