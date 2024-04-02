import React, { useState, useEffect } from 'react';
import WeaponList from './WeaponList.jsx';
import axios from 'axios';

const App = () => {
  const [windWeapons, setWindWeapons] = useState([]);

  useEffect(() => {
    axios.get('/wind')
      .then((response) => {
        setWindWeapons(response.data);
      })
      .catch((err) => {
        console.error('Error retrieving from the database ', err);
      })
  }, []);
  return (
    <div>
      <WeaponList weapons={windWeapons}/>
    </div>
  )
};

export default App;