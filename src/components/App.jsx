import React, { useState, useEffect } from 'react';
import WeaponList from './WeaponList.jsx';
import GridValues from './GridValues.jsx';
import Grid from './Grid.jsx';
import axios from 'axios';

const App = () => {
  //Weapons States
  const [windWeapons, setWindWeapons] = useState([]);
  //Summons
  const [summons, setSummons] = useState([]);
  //Grid States
  const [grid, setGrid] = useState([]);
  const [mainHand, setMainHand] = useState({});
  //Quality Control
  let awaitWeaponChange = true;

  //Grid functions
  const addToGrid = (weapon) => {
    if (Object.keys(mainHand).length === 0) {
      setMainHand(weapon);
    } else if (grid.length <= 8) {
      let oldGrid = grid.slice();
      oldGrid.push(weapon);
      setGrid(oldGrid);
    }
  };
  const removeFromGrid = (weapon) => {
    if (awaitWeaponChange) {
      awaitWeaponChange = false;
      let index = grid.indexOf(weapon);
      let newGrid = grid.slice(0, index).concat(grid.slice(index+1));
      setGrid(newGrid);
      awaitWeaponChange = true;
    }
  };
  const removeMainHand = () => {
    setMainHand({});
  }

  useEffect(() => {
    Promise.all([
      axios.get('/wind'),
      axios.get('/summons')
    ])
      .then(([windWeapons, summons]) => {
        setWindWeapons(windWeapons.data);
        setSummons(summons.data);
        console.log(summons.data);
      })
      .catch((err) => {
        console.error('Error retrieving from the database ', err);
      })
  }, []);


  return (
    <div className="appContainer">
      <WeaponList weapons={windWeapons} addWeapon={addToGrid}/>
      <Grid grid={grid} mainHand={mainHand} removeMH={removeMainHand} removeWeapon={removeFromGrid}/>
      <GridValues grid={grid} mainHand={mainHand}/>
    </div>
  )
};

export default App;