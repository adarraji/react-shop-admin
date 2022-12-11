import React, { useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { deleteUser, getUsers } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.client.clients);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteUser(id, dispatch);
    }

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "user",
            headerName: "User",
            width: 230,
            renderCell: (params) => {
                return (
                    <CellWithImage>
                        <CellImage src={params.row.img || "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} alt="avatar" />
                        {params.row.username}
                    </CellWithImage>
                );
            },
        },
        {
            field: "email",
            headerName: "Email",
            width: 230,
        },

        {
            field: "age",
            headerName: "Age",
            width: 100,
        },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <CellAction>
                        <Link to={"/users/" + params.row._id} style={{ textDecoration: "none" }}>
                            <ViewButton>Edit</ViewButton>
                        </Link>
                        <DeleteButton onClick={() => handleDelete(params.row._id)}>Delete</DeleteButton>
                    </CellAction>
                )
            }
        }
    ];

    return (
        <Container>
            <Sidebar />
            <ListContainer>
                <Navbar />
                <TableContainer>
                    <Title>
                        {"Add New Products"}
                        <Link to={"new"} style={LinkStyles}>
                            Add New
                        </Link>
                    </Title>
                    <DataGrid
                        rows={users}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        getRowId={(row) => row._id}
                    />
                </TableContainer>
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

const CellWithImage = styled.div`
    display: flex;
    align-items: center;
    
`;

const CellImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
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

const TableContainer = styled.div`
    height: 600px;
    padding: 20px;
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


export default UserList