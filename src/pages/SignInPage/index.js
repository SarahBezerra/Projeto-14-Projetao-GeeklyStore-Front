import { Link } from "react-router-dom";
import Container from "../GlobalStyled/Container";
import SignInSignUpContainer from "./Styled/SignInSignUpContainer";
import Form from "./Styled/Form";
import Title from "./Styled/Title";

export default function SignInPage(){

    return(
        <Container>
            <SignInSignUpContainer>
                <Title>
                    <h1>Sign-In</h1>
                </Title>
                <Form>
                    <input type = "email" placeholder = "E-mail" name = "email"/>
                    <input type = "password" placeholder = "Senha" name = "password"/>
                    <button type = "submit">Login</button>
                </Form>
                <Link to = "/cadastro">Não tem uma conta? Cadastre-se</Link>
            </SignInSignUpContainer>
        </Container>
    )
}

