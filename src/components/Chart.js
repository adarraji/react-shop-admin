import React from "react";
import styled from "styled-components";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ aspect, title, data, areaDataKey }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <ChartGrid>
            <CartesianGrid strokeDasharray="3 3" />
          </ChartGrid>
          <Tooltip />
          <Area type="monotone" dataKey={areaDataKey} stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  )
}

const Container = styled.div`
   flex: 4;
   -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    color: gray;
`;

const Title = styled.div`
  margin-bottom: 20px;
`;

const ChartGrid = styled.div`
  stroke: rgb(228, 225, 225);
`;

export default Chart