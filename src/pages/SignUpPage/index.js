import { Link } from "react-router-dom";
import Container from "../GlobalStyled/Container";
import Form from "../SignInPage/Styled/Form";
import SignInSignUpContainer from "../SignInPage/Styled/SignInSignUpContainer";
import Title from "../SignInPage/Styled/Title";


export default function SignUpPage(){

    return(
        <Container>
            <SignInSignUpContainer>
                <Title>
                    <h1>Sign-Up</h1>
                </Title>
                <Form>
                    <input type = "text" placeholder = "Nome" name = "name"/>
                    <input type = "email" placeholder = "E-mail" name = "email"/>
                    <input type = "url" placeholder = "Link da sua foto" name = "avatar"/>
                    <input type = "password" placeholder = "Senha" name = "password"/>
                    <input type = "password" placeholder = "Confirmar senha" name = "confirmPassword"/>
                    <button type = "submit">Cadastrar</button>
                </Form>
                <Link to = "/cadastro">Tem uma conta? Faça login!</Link>
            </SignInSignUpContainer>
        </Container>
    )
}
