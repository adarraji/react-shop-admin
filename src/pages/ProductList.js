import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DataTable from "../components/DataTable";
import { userColumns, userRows } from "../datatablesource";

const ProductList = () => {
    return (
        <Container>
            <Sidebar />
            <ListContainer>
                <Navbar />
                <DataTable title="Add New Products" columns={userColumns} rows={userRows} newLink="/users/new" viewLink="/users/test" />
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

export default ProductList