import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import List from "../components/Table";

const SinglePage = () => {
    return (
        <Container>
            <Sidebar />
            <SingleContainer>
                <Navbar />
                <Top>
                    <Left>
                        <EditButton>Edit</EditButton>
                        <Title>Information</Title>
                        <Item>
                            <ItemImage
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                            />
                            <Details>
                                <ItemTitle>Jane Doe</ItemTitle>
                                <DetailItem>
                                    <ItemKey>Email:</ItemKey>
                                    <ItemValue>janedoe@gmail.com</ItemValue>
                                </DetailItem>
                                <DetailItem>
                                    <ItemKey>Phone:</ItemKey>
                                    <ItemValue>+1 2345 6789</ItemValue>
                                </DetailItem>
                                <DetailItem>
                                    <ItemKey>Address:</ItemKey>
                                    <ItemValue>Elton St. 234 Garden Yd. NewYork</ItemValue>
                                </DetailItem>
                                <DetailItem>
                                    <ItemKey>Country:</ItemKey>
                                    <ItemValue>USA</ItemValue>
                                </DetailItem>
                            </Details>
                        </Item>
                    </Left>
                    <Right>
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </Right>
                </Top>
                <Bottom>
                    <Title>Last Transactions</Title>
                    <List />
                </Bottom>
            </SingleContainer>
        </Container>
    )
}

const Container = styled.div`
   display: flex;
   width: 100%;
`;

const SingleContainer = styled.div`
   flex:6;
`;

const Top = styled.div`
   display: flex;
   padding: 20px;
   gap: 20px;
`;

const Left = styled.div`
    flex:1;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    position: relative;
`;

const Title = styled.h1`
   font-size: 16px;
   color: lightgray;
   margin-bottom: 20px;

`;

const Item = styled.div`
   display: flex;
   gap: 20px;
`;

const ItemImage = styled.img`
   height: 100px;
   width: 100px;
   border-radius: 50%;
   object-fit: cover;
`;

const Details = styled.div`
   
`;

const ItemTitle = styled.h1`
   margin-bottom: 10px;
   color: #555;
`;

const DetailItem = styled.div`
   margin-bottom: 10px;
   font-size: 14px;
`;

const ItemKey = styled.span`
   font-weight: bold;
   color: gray;
   margin-right: 5px;
`;

const ItemValue = styled.span`
   font-weight: 300;
`;

const EditButton = styled.div`
   position: absolute;
   right: 0;
   top: 0;
   padding: 5px;
    font-size: 12px;
    color: #7451f8;
    background-color: #7551f818;
    cursor: pointer;
    border-radius: 0px 0px 0px 5px;
`;


const Right = styled.div`
   flex:2;
`;

const Bottom = styled.div`
   -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    margin: 10px 20px;
`;


export default SinglePage