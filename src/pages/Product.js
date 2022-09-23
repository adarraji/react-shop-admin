import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";

const Product = () => {

    const productData = [
        {
            name: "Jan",
            "Sales": 4000,
        },
        {
            name: "Feb",
            "Sales": 3000,
        },
        {
            name: "Mar",
            "Sales": 5000,
        },
    ];


    return (
        <Container>
            <Sidebar />
            <Wrapper>
                <Navbar />
                <ProductContainer>
                    <ProductTitleContainer>
                        <ProductTitle>Product</ProductTitle>
                        <ProductAddButton>Add</ProductAddButton>
                    </ProductTitleContainer>
                    <ProductTop>
                        <ProductTopLeft>
                            <Chart aspect={4 / 2} title="Sales Performance" data={productData} areaDataKey="Sales" />
                        </ProductTopLeft>
                        <ProductTopRight></ProductTopRight>
                    </ProductTop>
                </ProductContainer>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
   display: flex;
   width: 100%;
`;

const Wrapper = styled.div`
   flex:6;   
`;

const ProductContainer = styled.div`
    flex: 4;
    padding: 20px;  
`;

const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductTitle = styled.h1`
   
`;

const ProductAddButton = styled.button`
    text-decoration: none;
    color: green;
    background-color: white;
    font-size: 16px;
    font-weight: 40;
    border: 1px solid green;
    padding: 5px;   
    cursor: pointer;
`;


const ProductTop = styled.div`
   display: flex;
`;

const ProductTopLeft = styled.div`
   flex:1;   
`;

const ProductTopRight = styled.div`
   flex:1;
`;





export default Product