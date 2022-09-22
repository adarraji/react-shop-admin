import React from "react";
import styled from "styled-components";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = () => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <CellAction>
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <ViewButton>View</ViewButton>
                        </Link>
                        <DeleteButton>Delete</DeleteButton>
                    </CellAction>
                )
            }
        }
    ]

    return (
        <Container>
            <Title>
                Add New Users
                <Link to="/users/new" style={LinkStyles}>
                    Add New
                </Link>
            </Title>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </Container>
    )
}

const Container = styled.div`
    height: 600px;
    padding: 20px;
`;

const CellAction = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;    
`;

const ViewButton = styled.div`
    padding: 2px 5px;
    border-radius: 5px;
    color: darkblue;
    border: 1px dotted rgba(0, 0, 139, 0.596);
    cursor: pointer;
`;


const DeleteButton = styled.div`
    padding: 2px 5px;
    border-radius: 5px;
    color: crimson;
    border: 1px dotted rgba(220, 20, 60, 0.6);
    cursor: pointer;
`;


const Title = styled.div`
    width: 100%;
    font-size: 24px;
    color: gray;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LinkStyles = {
    textDecoration: "none",
    color: "green",
    fontSize: "16px",
    fontWeight: "400",
    border: "1px solid green",
    padding: "5px",
    borderRadius: "5px",
    cursor: "pointer"
}

export default DataTable