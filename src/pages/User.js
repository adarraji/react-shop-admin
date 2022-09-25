import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import List from "../components/Table";
import PublishIcon from '@mui/icons-material/Publish';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const SinglePage = () => {
    const location = useLocation();
    const userId = location.pathname.split("/")[2];

    const user = useSelector(state =>
        state.client.clients.find(item => item._id === userId)
    )

    const data = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 800 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
    ];

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
                                src={user.img}
                                alt=""
                            />
                            <Details>
                                <ItemTitle>{user.username}</ItemTitle>
                                <DetailItem>
                                    <ItemKey>Email:</ItemKey>
                                    <ItemValue>{user.email}</ItemValue>
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
                        <Chart aspect={4 / 1} title="User Spending ( Last 6 Months)" data={data} areaDataKey="Total" />
                    </Right>
                </Top>
                <Bottom>
                    <BottomLeft>
                        <UserForm>
                            <UserFormLeft>
                                <Label>User Name</Label>
                                <Input type="text" placeholder={user.username} />
                                <Label>Email</Label>
                                <Input type="email" placeholder={user.email} />
                                <Label>Password</Label>
                                <Input type="password" />
                                <Label>Admin</Label>
                                <Select name="isAdmin" id="idadmin">
                                    <Option value="yes">Yes</Option>
                                    <Option value="no">No</Option>
                                </Select>
                            </UserFormLeft>
                            <UserFormRight>
                                <UserUpload>
                                    <UserUploadImage alt="" src={user.img} />
                                    <Label htmlFor="file">
                                        <PublishIcon />
                                    </Label>
                                    <Input type="file" id="file" style={{ display: "none" }} />
                                </UserUpload>
                                <UserUploadButton>Upload</UserUploadButton>
                            </UserFormRight>
                        </UserForm>
                    </BottomLeft>
                    <BottomRight>
                        <Title>Last Transactions</Title>
                        <List />
                    </BottomRight>
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


const UserForm = styled.form`
    display: flex;
    justify-content: space-between;
`;

const UserFormLeft = styled.div`
    display: flex;
    flex-direction: column
`;

const Label = styled.label`
    margin-bottom: 10px;
    color: gray;
`;

const Input = styled.input`
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
`;

const Select = styled.select`
    margin-bottom: 10px;
`;

const Option = styled.option`

`;

const UserFormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const UserUpload = styled.div`
    display: flex;
    align-items: center;
`;

const UserUploadImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`;

const UserUploadButton = styled.button`
border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: white;
  color:darkblue;
  border: 1px solid darkblue;
  font-weight: 600;
  cursor: pointer;
`;

const Bottom = styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;   
`;

const BottomLeft = styled.div`
    flex:1;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    position: relative;
`;

const BottomRight = styled.div`
   flex:2;
`;


export default SinglePage