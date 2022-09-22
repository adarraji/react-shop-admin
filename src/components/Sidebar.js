import React from "react";
import styled from "styled-components";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <Container>
            <Top>
                <Link to="/">
                    <LogoTitle>Logo</LogoTitle>
                </Link>
            </Top>
            <HR />
            <Center>
                <List>
                    <Title>MAIN</Title>
                    <Item>
                        <Icon>
                            <DashboardIcon />
                        </Icon>
                        <Text>Dashboard</Text>
                    </Item>
                    <Title>LISTS</Title>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <Item>
                            <Icon>
                                <Person2OutlinedIcon />
                            </Icon>
                            <Text>Users</Text>
                        </Item>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <Item>
                            <Icon>
                                <StoreIcon />
                            </Icon>
                            <Text>Products</Text>
                        </Item>
                    </Link>
                    <Item>
                        <Icon>
                            <CreditCardIcon />
                        </Icon>
                        <Text>Orders</Text>
                    </Item>
                    <Item>
                        <Icon>
                            <LocalShippingIcon />
                        </Icon>
                        <Text>Delivery</Text>
                    </Item>
                    <Title>USEFUL</Title>
                    <Item>
                        <Icon>
                            <InsertChartIcon />
                        </Icon>
                        <Text>Stats</Text>
                    </Item>
                    <Item>
                        <Icon>
                            <NotificationsNoneIcon />
                        </Icon>
                        <Text>Notifications</Text>
                    </Item>
                    <Title>SERIVCE</Title>
                    <Item>
                        <Icon>
                            <SettingsSystemDaydreamIcon />
                        </Icon>
                        <Text>System Health</Text>
                    </Item>
                    <Item>
                        <Icon>
                            <PsychologyOutlinedIcon />
                        </Icon>
                        <Text>Logs</Text>
                    </Item>
                    <Item>
                        <Icon>
                            <SettingsApplicationsIcon />
                        </Icon>
                        <Text>Settings</Text>
                    </Item>
                    <Title>USER</Title>
                    <Item>
                        <Icon>
                            <AccountCircleOutlinedIcon />
                        </Icon>
                        <Text>Profile</Text>
                    </Item>
                    <Item>
                        <Icon>
                            <ExitToAppOutlinedIcon />
                        </Icon>
                        <Text>Logout</Text>
                    </Item>
                </List>
            </Center>
            <Bottom>
                <ColorOption></ColorOption>
                <ColorOption></ColorOption>
            </Bottom>
        </Container >
    )
}

const Container = styled.div`     
     flex:1;
     border-right: 0.5px solid lightgray;
     min-height: 100vh;
     background-color: white;
`;

const Top = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoTitle = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #6439ff;
`;

const HR = styled.hr`
    height: 0;
    border: 0.5px solid lightgray;
`;

const Center = styled.div`
    padding-left: 10px;
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Item = styled.li`
    display: flex;
    align-items: start;
    padding: 5px;
    cursor: pointer;

    &:hover {
        background-color: #ece8ff;
    }
`;

const Text = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: #888;
    margin-left: 10px;
`;

const Title = styled.p`
    font-size: 10px;
    font-weight: bold;
    color: #999;
    margin-top: 15px;
    margin-bottom: 5px;
`;

const Icon = styled.div`
    font-size: 18px;
    color: #7451f8;
`;

const Bottom = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`;

const ColorOption = styled.div`
    margin: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #7451f8;

    &:nth-child(1) {
        background-color: whitesmoke;        
    }
    
    &:nth-child(2) {
        background-color: #333;        
    }   
`;



export default Sidebar