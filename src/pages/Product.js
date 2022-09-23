import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import PublishIcon from '@mui/icons-material/Publish';

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
                        <ProductTopRight>
                            <ProductInfoTop>
                                <ProductInfoImage alt="" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                                <ProductName>Apple Airpods</ProductName>
                            </ProductInfoTop>
                            <ProductInfoButtom>
                                <ProductInfoItem>
                                    <ProductInfoKey>id:</ProductInfoKey>
                                    <ProductInfoValue>123</ProductInfoValue>
                                </ProductInfoItem>
                                <ProductInfoItem>
                                    <ProductInfoKey>sales:</ProductInfoKey>
                                    <ProductInfoValue>5123</ProductInfoValue>
                                </ProductInfoItem>
                                <ProductInfoItem>
                                    <ProductInfoKey>active:</ProductInfoKey>
                                    <ProductInfoValue>yes</ProductInfoValue>
                                </ProductInfoItem>
                                <ProductInfoItem>
                                    <ProductInfoKey>in stock:</ProductInfoKey>
                                    <ProductInfoValue>no</ProductInfoValue>
                                </ProductInfoItem>
                            </ProductInfoButtom>
                        </ProductTopRight>
                    </ProductTop>
                    <ProductBottom>
                        <ProductForm>
                            <ProductFormLeft>
                                <Label>Product Name</Label>
                                <Input type="text" placeholder="Apple AirPod" />
                                <Label>In Stock</Label>
                                <Select name="inStock" id="idStock">
                                    <Option value="yes">Yes</Option>
                                    <Option value="no">No</Option>
                                </Select>
                                <Label>Active</Label>
                                <Select name="active" id="active">
                                    <Option value="yes">Yes</Option>
                                    <Option value="no">No</Option>
                                </Select>
                            </ProductFormLeft>
                            <ProductFormRight>
                                <ProductUpload>
                                    <ProductUploadImage alt="" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                                    <Label htmlFor="file">
                                        <PublishIcon />
                                    </Label>
                                    <Input type="file" id="file" style={{ display: "none" }} />
                                </ProductUpload>
                                <ProductUploadButton>Upload</ProductUploadButton>
                            </ProductFormRight>
                        </ProductForm>
                    </ProductBottom>
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
   -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);  
`;

const ProductTopRight = styled.div`
    flex:1;
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47); 
`;

const ProductInfoTop = styled.div`
    display: flex;
    align-items: center;
`;

const ProductInfoImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
`;

const ProductName = styled.span`
    font-weight: 600;
    color: gray;
`;
const ProductInfoButtom = styled.div`
    margin-top: 10px;
`;

const ProductInfoItem = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
`;

const ProductInfoKey = styled.span`
    
`;

const ProductInfoValue = styled.span`
    font-weight: 300;
`;

const ProductBottom = styled.div`
   padding: 20px;
   margin: 20px;
   -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47); 
`;

const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`;

const ProductFormLeft = styled.div`
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

const ProductFormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductUpload = styled.div`
    display: flex;
    align-items: center;
`;

const ProductUploadImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`;

const ProductUploadButton = styled.button`
border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: white;
  color:darkblue;
  border: 1px solid darkblue;
  font-weight: 600;
  cursor: pointer;
`;

export default Product;