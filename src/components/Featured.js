import React from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";





const Featured = () => {
    return (
        <Container>
            <Top>
                <MainTitle>Total Revenue</MainTitle>
                <MoreVertIcon fontSize="small" />
            </Top>
            <Bottom>
                <FeaturedChart>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </FeaturedChart>
                <Title>Total sales made today</Title>
                <Amount>$420</Amount>
                <Desc>Previous transactions processing. Last payments may not be included.</Desc>
                <Summary>
                    <Item>
                        <ItemTitle>Target</ItemTitle>
                        <ItemResult color="red">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <ResultAmount>12.4k</ResultAmount>
                        </ItemResult>
                    </Item>
                    <Item>
                        <ItemTitle>Last week</ItemTitle>
                        <ItemResult color="green">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <ResultAmount>12.4k</ResultAmount>
                        </ItemResult>
                    </Item>
                    <Item>
                        <ItemTitle>Last Month</ItemTitle>
                        <ItemResult color="green">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <ResultAmount>12.4k</ResultAmount>
                        </ItemResult>
                    </Item>
                </Summary>
            </Bottom>
        </Container>
    )
}

const Container = styled.div`
   flex: 2;
   -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
`;

const MainTitle = styled.h1`
    font-size: 16px;
    font-weight: 500;
`;

const Bottom = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const FeaturedChart = styled.div`
    width: 100px;
    height: 100px;
`;

const Title = styled.p`
    font-size: 16px;
    font-weight: 500
`;

const Amount = styled.p`
    font-size: 30px;
`;

const Desc = styled.p`
    font-size: 12px;
    font-weight: 300;
    color: gray;
    text-align: center;
`;

const Summary = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Item = styled.div`
   text-align: center;
`;

const ItemTitle = styled.div`
   font-size: 14px;
   color: gray;
`;

const ItemResult = styled.div`
   display: flex;
   align-items: center;
   margin-top: 10px;
   font-size: 14px;
   color: ${props => props.color};
`;

const ResultAmount = styled.div`
   
`;



export default Featured