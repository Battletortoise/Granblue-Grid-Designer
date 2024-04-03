import React, {useState} from 'react';

const Summon = ({ summon }) => {
  const [currentSummon, setCurrentSummon] = useState(summon);

  const style = {
    backgroundImage: `url(${summon.thumbnail})`
  };

  return (
    <div className="summon" style={ style }></div>
  )
};

export default Summon;