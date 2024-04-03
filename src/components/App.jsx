import React, { useState, useEffect } from 'react';
import WeaponList from './WeaponList.jsx';
import GridValues from './GridValues.jsx';
import SummonList from './SummonList.jsx';
import WeaponGrid from './WeaponGrid.jsx';
import SummonGrid from './SummonGrid.jsx';
import axios from 'axios';

const App = () => {
  //Weapons States
  const [windWeapons, setWindWeapons] = useState([]);
  //Summons
  const [summons, setSummons] = useState([]);
  //Grid States
  const [grid, setGrid] = useState([]);
  const [mainHand, setMainHand] = useState({});
  const [mainSummon, setMainSummon] = useState({});
  const [subSummons, setSubSummons] = useState([]);
  //Quality Control
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
  };
  const removeFromGrid = (weapon) => {
    setTimeout(() => {
      if (awaitWeaponChange) {
        setAwaitWeaponChange(false);
        let index = grid.indexOf(weapon);
        let newGrid = grid.slice(0, index).concat(grid.slice(index+1));
        setGrid(newGrid);
        setAwaitWeaponChange(true);
      }
    }, 0);
  };
  const removeMainHand = () => {
    setMainHand({});
  };
  //Summon Functions
  const addSummon = (summon) => {
    if (Object.keys(mainSummon).length === 0) {
      setMainSummon(summon);
    } else if (subSummons.length <= 3) {
      let oldSubs = subSummons.slice();
      oldSubs.push(summon);
      setSubSummons(oldSubs);
    }
  };
  const removeSummon = (summon) => {
    let index = subSummons.indexOf(summon);
    let newSubs = subSummons.slice(0, index).concat(subSummons.slice(index+1));
    setSubSummons(newSubs);
  };
  const removeMainSummon = () => {
    setMainSummon({});
  };

  //Use Effects
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
      <div className="list">
        <h3>Weapons</h3>
        <WeaponList weapons={windWeapons} addWeapon={addToGrid}/>
        <h3>Summons</h3>
        <SummonList summons={summons} addSummon={addSummon}/>
      </div>
      <div className="grid">
        <WeaponGrid grid={grid} mainHand={mainHand} removeMH={removeMainHand} removeWeapon={removeFromGrid}/>
        <SummonGrid main={mainSummon} subs={subSummons} removeSub={removeSummon} removeMain={removeMainSummon}/>
      </div>
      <GridValues grid={grid} mainHand={mainHand}/>
    </div>
  )
};

export default App;