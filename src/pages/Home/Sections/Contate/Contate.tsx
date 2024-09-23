import styled from "@emotion/styled";
import theme from "../../../../theme";

const Contate = () => {
  // Section
  const StyledProjetos = styled("div")({
    backgroundColor: "grey",
    height: "100vh", // Ocupa toda a altura da tela
    padding: "80px",
    display: "flex",
    flexDirection: "column", // Alinhamento vertical
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
  });

  const FormContainer = styled("div")({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
    width: "300px",
  });

  const Input = styled("input")({
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "none",
    borderRadius: "5px",
  });

  const TextArea = styled("textarea")({
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "none",
    borderRadius: "5px",
    resize: "vertical", // Permite redimensionar verticalmente
    minHeight: "100px", // Altura mínima
  });

  const SubmitButton = styled(Input)({
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
  });

  const Title = styled("h1")({
    textAlign: "center", // Centraliza o título horizontalmente
    marginBottom: "20px",
    fontSize: "3rem",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  });



  return (
    <StyledProjetos id="Contate">
      <Title>Contate-me</Title>
      <FormContainer>
        <form action="https://formsubmit.co/pablo.carral@outlook.com" method="POST">
          <h2>Entre em contato comigo</h2>
          <br/>
          <label htmlFor="nome">Nome:</label>
          <Input type="text" id="nome" name="nome" required />
          
          <label htmlFor="email">E-mail:</label>
          <Input type="email" id="email" name="email" required />
          
          <label htmlFor="comentario">Comentário:</label>
          <TextArea id="comentario" name="comentario" required />
          
          <SubmitButton type="submit" value="Enviar" />

          <input type="hidden" name="_subject" value="Novo Contato!"/>
          <input type="hidden" name="_honey" value='display:none'/>
          <input type="hidden" name="_captcha" value="false"/>
        </form>
      </FormContainer>
    </StyledProjetos>
  );
};

export default Contate;
