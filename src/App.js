import { useEffect, useState } from "react";

import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  function getData() {
    fetch(`https://reqres.in/api/users?page=2`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => setUsers(data.data))
        .catch((err) => console.info(err))
  }

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => getData()}>obtener datos</button>
       {
         users.map((user) => (<div>
            <h2>{user.first_name}</h2>
            <p>{user.email}</p>
         </div>))
       }
      </header>
    </div>
  );
}

export default App;
