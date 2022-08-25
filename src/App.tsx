import React from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import TableContainer from './TableContainer';
const GET_LAUNCHES = gql`
  query Launches {
    launches {
      mission_name
      rocket {
        rocket_name
      }
      launch_year
      id
      details
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
      <div className="App">
        <header className="App-header" >
          Welcome to SpaceX Mission Tracker 🚀
        </header>
        <TableContainer launches={data.launches}/>
      </div>
  );
}

export default App;
