import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { userRequest } from "../requestMethods";


const SmallWidget = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest("users/?new=true");
        setUsers(res.data);
      } catch (err) { }
    };
    getUsers();
  }, []);

  return (
    <Container>
      <WidgetTitle>New Join Members</WidgetTitle>
      <List>
        {
          users.map(user => (
            <Item key={user._id}>
              <Image atl="" src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} />
              <User>
                <Username>{user.username}</Username>
                <UserTitle>Software Engineer</UserTitle>
              </User>
              <Button>
                <VisibilityIcon style={{ fontSize: "16px", marginRight: "5px" }} />
                Display
              </Button>
            </Item>
          ))
        }
      </List>
    </Container>
  )
}

const Container = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    margin-right: 20px;
    flex:1;
`;

const WidgetTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.span`
  font-weight: 600;
`;

const UserTitle = styled.span`
  font-weight: 300;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

export default SmallWidget