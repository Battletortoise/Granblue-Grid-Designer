import React, { useState, useEffect } from 'react';
import WeaponList from './WeaponList.jsx';
import GridValues from './GridValues.jsx';
import Grid from './Grid.jsx';
import axios from 'axios';

const App = () => {
  //Weapon States
  const [windWeapons, setWindWeapons] = useState([]);
  //Grid States
  const [grid, setGrid] = useState([]);
  const [mainHand, setMainHand] = useState({});
  //Quality Control States
  const [awaitWeaponChange, setAwaitWeaponChange] = useState(true);

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
  };
  const removeFromGrid = (weapon) => {
    setAwaitWeaponChange(false);
    let index = grid.indexOf(weapon);
    let newGrid = grid.slice(0, index).concat(grid.slice(index+1));
    setGrid(newGrid);
    setAwaitWeaponChange(true);
  };
  const removeMainHand = () => {
    setMainHand({});
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
    <div className="appContainer">
      <WeaponList weapons={windWeapons} addWeapon={addToGrid}/>
      <Grid grid={grid} mainHand={mainHand} removeMH={removeMainHand} removeWeapon={removeFromGrid}/>
      <GridValues />
    </div>
  )
};

export default App;