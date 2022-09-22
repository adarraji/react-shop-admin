import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username: username, password: password })
    }

    return (
        <Container>
            <Input onChange={e => setUsername(e.target.value)} type="text" placeholder="username"></Input>
            <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="password"></Input>
            <Button onClick={handleClick}>Login</Button>
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