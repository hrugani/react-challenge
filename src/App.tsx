import React from "react";
import { Table } from "antd";
import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;

const columns = [
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
    render: (text) => (
      <a href={`https://www.x-rates.com/table/?from=${text}&amount=1`}>
        {text}
      </a>
    )
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate"
  }
];

function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <Table columns={columns} dataSource={data.rates} rowKey="currency" />;
}

export default App;
