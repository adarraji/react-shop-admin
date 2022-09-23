import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DataTable from "../components/DataTable";

const UserList = () => {
    return (
        <Container>
            <Sidebar />
            <ListContainer>
                <Navbar />
                <DataTable />
            </ListContainer>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
`;

const ListContainer = styled.div`
    flex: 6;
`;

export default UserList