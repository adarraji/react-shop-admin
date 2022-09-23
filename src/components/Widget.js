import React from "react";
import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Widget = () => {
    return (
        <Container>
            <Item>
                <Title>Revanue</Title>
                <MoneyContainer>
                    <Money>
                        % 2145
                    </Money>
                    <Rate color="red">
                        <KeyboardArrowDownIcon />
                        -11.4
                    </Rate>
                </MoneyContainer>
                <Sub>Compared to last month</Sub>
            </Item>
            <Item>
                <Title>Sales</Title>
                <MoneyContainer>
                    <Money>
                        % 2145
                    </Money>
                    <Rate >
                        <KeyboardArrowDownIcon />
                        -11.4
                    </Rate>
                </MoneyContainer>
                <Sub>Compared to last month</Sub>
            </Item>
            <Item>
                <Title>Cost</Title>
                <MoneyContainer>
                    <Money>
                        % 2145
                    </Money>
                    <Rate color="red">
                        <KeyboardArrowDownIcon />
                        -11.4
                    </Rate>
                </MoneyContainer>
                <Sub>Compared to last month</Sub>
            </Item>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;        
    width: 100%;
`;

const Item = styled.div`       
    flex: 1;
    margin: 0px 20px;
    padding: 30px;  
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47); 
    border-radius: 10px;    
    cursor: pointer;
    cursor: pointer;
`;

const Title = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: rgb(160, 160, 160);
`;


const MoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`;

const Money = styled.span`
    font-size: 30px;
    font-weight: 600;
`;

const Rate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;    
`;

const Sub = styled.span`
font-size: 15px;
    color: gray;
    /* border-bottom: 1px solid gray; */
`;

export default Widget