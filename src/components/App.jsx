import React, { useState, useEffect } from 'react';
import WeaponList from './WeaponList.jsx';
import WeaponFilter from './WeaponFilter.jsx';
import GridValues from './GridValues.jsx';
import SummonList from './SummonList.jsx';
import WeaponGrid from './WeaponGrid.jsx';
import SummonGrid from './SummonGrid.jsx';
import axios from 'axios';

const App = () => {
  //Weapons States
  const [windWeapons, setWindWeapons] = useState([]);
  const [fireWeapons, setfireWeapons] = useState([]);
  const [lightWeapons, setLightWeapons] = useState([]);
  const [allWeapons, setAllWeapons] = useState([]);
  const [displayWeapons, setDisplayWeapons] = useState([]);
  //Summons
  const [summons, setSummons] = useState([]);
  //Grid States
  const [grid, setGrid] = useState([]);
  const [mainHand, setMainHand] = useState({});
  const [mainSummon, setMainSummon] = useState({});
  const [friendSummon, setFriendSummon] = useState({})
  const [subSummons, setSubSummons] = useState([]);
  //Quality Control
  const [awaitWeaponChange, setAwaitWeaponChange] = useState(true);
  const [filter, setFilter] = useState('all');

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
      setAwaitWeaponChange(false);
      let index = grid.indexOf(weapon);
      let newGrid = grid.slice(0, index).concat(grid.slice(index+1));
      setGrid(newGrid);
      setAwaitWeaponChange(true);
    }
  };
  const removeMainHand = () => {
    setMainHand({});
  };
  //Summon Functions
  const addSummon = (summon) => {
    if (Object.keys(mainSummon).length === 0) {
      setMainSummon(summon);
    } else if (Object.keys(friendSummon).length === 0) {
      setFriendSummon(summon);
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
  const removeFriendSummon = () => {
    setFriendSummon({});
  };
  //Filter
  const filterChange = (value) => {
    setFilter(value);
  };
  
  const resetGrid = () => {
    setMainHand({});
    setGrid([]);
    setMainSummon({});
    setFriendSummon({});
    setSubSummons([]);
  };

  //Use Effects
  useEffect(() => {
    Promise.all([
      axios.get('/wind'),
      axios.get('/light'),
      axios.get('/fire'),
      axios.get('/summons')
    ])
      .then(([windWeapons, lightWeapons, fireWeapons, summons]) => {
        setWindWeapons(windWeapons.data);
        setLightWeapons(lightWeapons.data);
        setfireWeapons(fireWeapons.data);
        setSummons(summons.data);
        setAllWeapons(windWeapons.data.concat(lightWeapons.data).concat(fireWeapons.data));
        setDisplayWeapons(windWeapons.data.concat(lightWeapons.data).concat(fireWeapons.data));
      })
      .catch((err) => {
        console.error('Error retrieving from the database ', err);
      })
  }, []);

  useEffect(() => {
    if (filter === 'fire') {
      setDisplayWeapons(fireWeapons);
    } else if (filter === 'wind') {
      setDisplayWeapons(windWeapons);
    } else if (filter === 'light') {
      setDisplayWeapons(lightWeapons);
    } else if (filter === 'all') {
      setDisplayWeapons(allWeapons);
    };
  }, [filter])

  return (
    <div className="appContainer">
      <div className="list">
        <h3>Weapons</h3>
        <WeaponFilter filterChange={filterChange}/>
        <hr></hr>
        <WeaponList weapons={displayWeapons} addWeapon={addToGrid}/>
        <h3>Summons</h3>
        <hr></hr>
        <SummonList summons={summons} addSummon={addSummon}/>
      </div>
      <div className="grid">
        <button onClick={resetGrid}>Reset Grid</button>
        <WeaponGrid grid={grid} mainHand={mainHand} removeMH={removeMainHand} removeWeapon={removeFromGrid}/>
        <SummonGrid main={mainSummon} friend={friendSummon} subs={subSummons} removeSub={removeSummon} removeMain={removeMainSummon} removeFriend={removeFriendSummon}/>
      </div>
      <GridValues grid={grid} mainHand={mainHand} mainSummon={mainSummon} subSummons={subSummons} friendSummon={friendSummon}/>
    </div>
  )
};

export default App;