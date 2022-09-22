import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Search>
                        <Input type="text" placeholder="Search..." />
                        <SearchOutlinedIcon />
                    </Search>
                    <Items>
                        <Item>
                            <LanguageOutlinedIcon style={{ "fontSize": "20px" }} />
                            English
                        </Item>
                        <Item>
                            <DarkModeOutlinedIcon style={{ "fontSize": "20px" }} />
                        </Item>
                        <Item>
                            <FullscreenExitOutlinedIcon style={{ "fontSize": "20px" }} />
                        </Item>
                        <Item>
                            <NotificationsNoneOutlinedIcon style={{ "fontSize": "20px" }} />
                            <Counter>1</Counter>
                        </Item>
                        <Item>
                            <ChatBubbleOutlineOutlinedIcon style={{ "fontSize": "20px" }} />
                            <Counter>2</Counter>
                        </Item>
                        <Item>
                            <ListOutlinedIcon style={{ "fontSize": "20px" }} />
                        </Item>
                        <Item>
                            <Image alt="" src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        </Item>
                    </Items>
                </Wrapper>
            </Container>
        </div>
    )
}

const Container = styled.div`
  height: 50px;
  border-bottom: 0.5px solid rgb(231, 228, 228);
  display: flex;
  align-items: center;
  font-size: 14px;
  color: gray;
`;

const Wrapper = styled.div`
   padding: 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
`;

const Search = styled.div`
   display: flex;
   align-items: center;
   border: 0.5px solid lightgray;
   padding: 3px;
`;

const Input = styled.input`
   border: none;
   outline: none;
   background: transparent;
   &::placeholder {
          font-size: 12px;
        }
`;

const Items = styled.div`
   display: flex;
   align-items: center;   
`;


const Item = styled.div`
   display: flex;
   align-items: center; 
   margin: 20px;
   position: relative;  
`;

const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

const Counter = styled.div`
     width: 15px;
          height: 15px;
          background-color: red;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          position: absolute;
          top: -5px;
          right: -5px;
`;


export default Navbar