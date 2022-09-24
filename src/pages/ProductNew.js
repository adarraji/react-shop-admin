import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";



const ProductNew = () => {
    const [file, setFile] = useState("");
    console.log(file);
    return (
        <Container>
            <Sidebar />
            <NewContainer>
                <Navbar />
                <Top>
                    <Title>Add New Product</Title>
                </Top>
                <Bottom>
                    <Left>
                        <Image alt="" src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} />
                    </Left>
                    <Right>
                        <Form>
                            <FormInput>
                                <Label htmlFor="file">
                                    Image: <Icon> <DriveFolderUploadOutlinedIcon /> </Icon>
                                </Label>
                                <FileInput type="file" id="file" onChange={e => setFile(e.target.files[0])} />
                            </FormInput>
                            <FormInput>
                                <Label>Title</Label>
                                <Input type="text" placeholder="Apple Macbook Pro" />
                            </FormInput>
                            <FormInput>
                                <Label>Description</Label>
                                <Input type="text" placeholder="description..." />
                            </FormInput>
                            <FormInput>
                                <Label>Categories</Label>
                                <Input type="text" placeholder="jeans,skirts" />
                            </FormInput>
                            <FormInput>
                                <Label>Price</Label>
                                <Input type="text" placeholder="100" />
                            </FormInput>
                            <FormInput>
                                <Label>Stock</Label>
                                <Select name="inStock">
                                    <Option value="true">Yes</Option>
                                    <Option value="false">No</Option>
                                </Select>
                            </FormInput>
                            <Button>Send</Button>
                        </Form>
                    </Right>
                </Bottom>
            </NewContainer>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const NewContainer = styled.div`
  flex: 6;
`;

const Top = styled.div`
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    margin: 20px;
    display: flex;
`;

const Title = styled.h1`
    color: lightgray;
    font-size: 20px;
`;

const Bottom = styled.div`
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    margin: 20px;
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    text-align: center;
`;

const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`;

const Right = styled.div`
  flex: 2;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-around;
`;

const FormInput = styled.div`
    width: 40%;
`;

const FileInput = styled.input`
    display: none;
`;

const Input = styled.input`
    width: 100%;
    padding: 5px;
    border: none;
    border-bottom: 1px solid gray;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Button = styled.button`
    width: 150px;
    padding: 10px;
    border: none;
    background-color: teal;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
`;

const Icon = styled.div`
    cursor: pointer;
`;

const Select = styled.select`
    margin: 10px 0px;
`;

const Option = styled.option`

`;



export default ProductNew