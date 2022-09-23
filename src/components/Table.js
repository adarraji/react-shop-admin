import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { userRequest } from "../requestMethods";
import { format } from "timeago.js"


const List = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest("orders");
                setOrders(res.data);
            } catch (err) { }
        };
        getOrders();
    }, []);

    return (
        <Container>
            <ListTitle>Latest Transactions</ListTitle>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell">Customer</TableCell>
                            <TableCell className="tableCell">Date</TableCell>
                            <TableCell className="tableCell">Amount</TableCell>
                            <TableCell className="tableCell">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order._id}>
                                <TableCell>{order.userId}</TableCell>
                                <TableCell >{format(order.createdAt)}</TableCell>
                                <TableCell >$ {order.amount}</TableCell>

                                <TableCell >
                                    <Status status={order.status}>
                                        {order.status}
                                    </Status>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

const Container = styled.div`
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    flex:2;
`;

const ListTitle = styled.div`
    font-weight: 500;
    color: gray;
    margin-bottom: 15px;
`;

const Status = styled.span`
    padding: 5px;
    border-radius: 5px;
    color: ${props => props.status === "Approved" ? "green" : "goldenrod"};
    background-color: ${props => props.status === "Approved" ? "rgba(0, 128, 0, 0.151)" : "rgba(189, 189, 3, 0.103)"};
`;


export default List