import React from "react";
import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <Input type="text" placeholder="username"></Input>
            <Input type="password" placeholder="password"></Input>
            <Button>Login</Button>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
`;

const Input = styled.input`
   padding: 10px;
   margin-bottom: 20px;
`;

const Button = styled.button`
   padding: 10px;
   width: 100px;
`;

export default Login