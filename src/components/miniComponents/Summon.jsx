import React, {useState} from 'react';

const Summon = ({ summon, click }) => {
  const [currentSummon, setCurrentSummon] = useState(summon);

  const style = {
    backgroundImage: `url(${summon.thumbnail})`
  };
  const onSummonClick = () => {
    click(currentSummon);
  }

  return (
    <div onClick={onSummonClick} className="summon" style={ style }></div>
  )
};

export default Summon;