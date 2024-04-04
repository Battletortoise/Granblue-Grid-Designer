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
  const [lightWeapons, setLightWeapons] = useState([]);
  const [allWeapons, setAllWeapons] = useState([]);
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

  //Use Effects
  useEffect(() => {
    Promise.all([
      axios.get('/wind'),
      axios.get('/light'),
      axios.get('/summons')
    ])
      .then(([windWeapons, lightWeapons, summons]) => {
        setWindWeapons(windWeapons.data);
        setLightWeapons(lightWeapons.data);
        setSummons(summons.data);
        setAllWeapons(windWeapons.data.concat(lightWeapons.data));
      })
      .catch((err) => {
        console.error('Error retrieving from the database ', err);
      })
  }, []);


  return (
    <div className="appContainer">
      <div className="list">
        <h3>Weapons</h3>
        <hr></hr>
        <WeaponList weapons={allWeapons} addWeapon={addToGrid}/>
        <h3>Summons</h3>
        <hr></hr>
        <SummonList summons={summons} addSummon={addSummon}/>
      </div>
      <div className="grid">
        <WeaponGrid grid={grid} mainHand={mainHand} removeMH={removeMainHand} removeWeapon={removeFromGrid}/>
        <SummonGrid main={mainSummon} friend={friendSummon} subs={subSummons} removeSub={removeSummon} removeMain={removeMainSummon} removeFriend={removeFriendSummon}/>
      </div>
      <GridValues grid={grid} mainHand={mainHand} mainSummon={mainSummon} subSummons={subSummons} friendSummon={friendSummon}/>
    </div>
  )
};

export default App;