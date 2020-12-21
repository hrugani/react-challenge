import React from "react"
import { Table } from "antd"
import { useQuery, gql } from "@apollo/client"
import 'antd/dist/antd.css'


const LIST_OF_PORTS = gql`
  {
    search(type: REPOSITORY, query: "react", first: 100) {
      repos: nodes {
          ... on Repository {
            name
            url
            stargazerCount
            forkCount
        }
      }
    }
  }
`;

const GITHUB_REPO_URL_SUFFIX = 'https://github.com/'

const columns = [
  {
    title: "name",
    dataIndex: "url",
    key: "url",
    render: (text) => (
      <a href={`${text}`}>
        {`${text.substring(GITHUB_REPO_URL_SUFFIX.length)}`}
      </a>
    )
  },
  {
    title: "stars",
    dataIndex: "stargazerCount",
    key: "stargazerCount"
  },
  {
    title: "forks",
    dataIndex: "forkCount",
    key: "forkCount"
  }
];

function App() {
  const { loading, error, data } = useQuery(LIST_OF_PORTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <Table columns={columns} dataSource={data.search.repos} rowKey="url" />;
}

export default App;
