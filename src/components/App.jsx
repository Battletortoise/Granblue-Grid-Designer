import React, { useState, useEffect } from 'react';
import WeaponList from './WeaponList.jsx';
import axios from 'axios';

const App = () => {
  //Weapon States
  const [windWeapons, setWindWeapons] = useState([]);
  //Grid States
  const [grid, setGrid] = useState([]);
  const [mainHand, setMainHand] = useState({});

  //Grid functions
  const addToGrid = (weapon) => {
    if (Object.keys(mainHand).length === 0) {
      setMainHand(weapon);
    } else if (grid.length <= 8) {
      let oldGrid = grid.slice();
      oldGrid.push(weapon);
      setGrid(oldGrid);
    }
    console.log(mainHand, grid);
  }

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
      <WeaponList weapons={windWeapons} add={addToGrid}/>
    </div>
  )
};

export default App;