import styled from "@emotion/styled";
import theme from "../../../../theme";

const Contate = () => {
  // Section
  const StyledProjetos = styled("div")({
    backgroundColor: "grey",
    height: "100vh",
    padding: "50px",
    display: "flex",
    flexDirection: "column", // Alinhamento vertical
    justifyContent: "center",
    alignItems: "center",
  });

  const FormContainer = styled("div")({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
    width: "300px",
    marginTop: "auto", // Move o formulário para o centro verticalmente
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
    alignSelf: "flex-start", // Alinha o título ao topo
    marginBottom: "20px", // Espaçamento entre o título e o formulário
    textAlign: "center"
  });

  return (
    <StyledProjetos id="Contate">
      <Title>Contate-me</Title>
      <FormContainer>
        <form>
          <label htmlFor="nome">Nome:</label>
          <Input type="text" id="nome" name="nome" required />
          
          <label htmlFor="email">E-mail:</label>
          <Input type="email" id="email" name="email" required />
          
          <label htmlFor="comentario">Comentário:</label>
          <TextArea id="comentario" name="comentario" required />
          
          <SubmitButton type="submit" value="Enviar" />
        </form>
      </FormContainer>
    </StyledProjetos>
  );
};

export default Contate;
