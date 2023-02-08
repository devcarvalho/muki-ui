import React from "react";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

function Login() {
  const navigate = useNavigate();

  const StyledLogo = styled(Logo)`
    margin: auto;
    path, line, circle {
      stroke: #76B561;
    }
  `;

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "67px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "80%",
          maxWidth: "400px",
        }}
      >
        <StyledLogo />
        <div >
          <Typography variant="h1" sx={{textAlign: "center", marginBottom: "15px"}}>Bem vindo,</Typography>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Typography variant="body1" sx={{textAlign: "center", width: "180px", marginBottom: "30px"}}>Gaste menos do que ganha, e invista a diferença.</Typography>
        </div>
        <FormControl>
        <OutlinedInput placeholder="Email" />
        </FormControl>
        <FormControl>
        <OutlinedInput placeholder="Senha" type="password" />
        </FormControl>
        <Link onClick={() => navigate("/password-recovery")} sx={{textAlign: "end", fontSize: "14px", marginTop: "8px", fontWeight: "500"}}>Esqueceu a senha?</Link>
        <Button onClick={() => navigate("/finances/home")} variant="contained" sx={{marginTop: "15px"}}>Login</Button>
        <div style={{fontSize:"14px", position: "absolute", top: "758px", left: "74px", fontWeight: "500"}}>
          <span>
            Não tem uma conta?
          </span>
          <Link onClick={() => navigate("/user-register")} sx={{color: "#44BBFE"}}> Cadastrar-me</Link>
        </div>
      </Box>
    </Container>
  );
}

export default Login;
