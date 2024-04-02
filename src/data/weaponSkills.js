const weaponSkills = {
  "Abandon": {
    10: .175,
    15: .25,
    "stat": "data",
    "condition": "progression",
    "boost": true
  },
  "Arts": {
    10: 10,
    15: 15,
    20: 20,
    "stat": "skillCap",
    "boost": false
  },
  "Ascendancy": {
    "value": 10,
    "stat": "specialCACap",
    "boost": false
  },
  "Essence": {
    "value": 10,
    "stat": "damageCap",
    "boost": false
  },
  "Betrayal": {
    10: 8,
    15: 10,
    "stat": "attack",
    "condition": "8_turn",
    "boost": true
  },
  "Chain Force": {
    10: [40, 20],
    15: [50, 30],
    20: [60, 40],
    "stat": ["chainBurst", "chainBurstCap"],
    "boost": false
  },
  "Craft": {
    "value": 20000,
    "stat": "supplemental",
    "condition": "crit",
    "boost": false
  },
  "Excelsior": {
    10: 10,
    15: 15,
    "stat": "CACap",
    "boost": false
  },
  "Pact": {
    "value": 50000,
    "stat": "supplemental",
    "boost": false
  },
  "Preemptive Blade": {
    10: 15,
    15: 20,
    "stat": "elementalAttack",
    "boost": false
  },
  "Quintessence": {
    10: 5.5,
    15: 7,
    "stat": "damageCap",
    "boost": false
  }
};

export default weaponSkills;
