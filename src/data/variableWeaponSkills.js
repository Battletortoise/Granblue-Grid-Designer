const VWS = {
  "Aegis": {
    "normal": {
      "small": {
        10: 12,
        15: 14
      },
      "medium": {
        10: 15,
        15: 17
      },
      "big": {
        10: 18,
        15: 21
      },
      "big II": {
        10: 19,
        15: 24
      },
    },
    "omega": {
      "small": {
        10: 12,
        15: 14.5
      },
      "medium": {
        10: 15,
        15: 18,
        20: 20
      }
    },
    "ex": {
      "small": {
        10: 10,
        15: 14,
        20: 16
      },
      "medium": {
        10: 12,
        15: 14.5
      },
      "big": {
        10: 15
      }
    },
    "stat": "hp"
  },
  "Auspice": {
    "medium": {
      10: [15, 7.5],
      15: [17, 10]
    },
    "stat": ["hp", "healCap"]
  },
  "Bladeshield": {
    "small": {
      10: [12, 2],
      15: [14, 3]
    },
    "stat": ["hp", "crit"]
  },
  //Not Including HP loss
  "Bloodshed": {
    "big": {
      10: 15,
      15: 18
    },
    "stat": "attack"
  },
  "Celere": {
    "normal": {
      "small": {
        10: [10, 2],
        15: [12, 3],
        20: [13, 4]
      },
      "medium": {
        10: [12, 5],
        15: [14.5, 6.5],
        20: [16, 7.5]
      },
      "big": {
        10: [15, 8],
        15: [18, 10],
        20: [20, 11]
      },
      "big II": {
        10: [16, 10],
        15: [20, 12]
      }
    },
    "omega": {
      "medium": {
        10: [12, 5],
        15: [14.5, 6.5],
        20: [16, 7.5]
      }
    },
    "stat": ["attack", "crit"]
  },
  "Crux": {
    "big": {
      10: 80000,
      15: 105000
    },
    "stat": "supplementalCA"
  },
  "Deathstrike": {
    "big": {
      10: 3.5,
      15: 4.5
    },
    "stat": "bonusDamage"
  },
  "Demolishment": {
    "big": {
      10: 2.5,
      15: 3
    },
    "stat": "amplifyNA"
  },
  "Emnity": {
    "small": {
      10: 6,
      15: 7,
      20: 7.5
    },
    "medium": {
      10: 8,
      15: 10
    },
    "big": {
      10: 10,
      15: 12.5,
      20: 13.5
    },
    "stat": "emnity"
  },
  "Fandango": {
    "small": {
      10: [10, 1.35],
      15: [12, 2]
    },
    "medium": {
      10: [12, 2.15],
      15: [14.5, 2.9]
    },
    "big": {
      10: [15, 3.45],
      15: [18, 4.2]
    },
    "stat": ["attack", "TA"]
  },
  "Garrison": {
    "small": {
      10: 6,
      15: 7
    },
    "medium": {
      10: 8,
      15: 10,
      20: 11
    },
    "big": {
      10: 10,
      15: 12.5,
      20: 13.5
    },
    "stat": "garrison"
  },
  "Glory": {
    "big": {
      10: [10, 4.8, 12, 4.8],
      15: [12.5, 6.8, 14.5, 6.8],
      20: [14.5, 7.8, 16.5, 7.8]
    },
    "stat": ["CAdamage", "CACap", "chainBurst", "chainBurstCap"]
  },
  "Heroism": {
    "medium": {
      10: [12, 3.5],
      15: [14, 5]
    },
    "stat": ["hp", "DA"]
  },
  "Majesty": {
    "small": {
      10: [10, 10],
      15: [12, 12],
      20: [12.5, 12.5]
    },
    "medium": {
      10: [12, 12],
      15: [14.5, 14.5],
      20: [15.5, 15.5]
    },
    "big": {
      10: [15, 15],
      15: [18, 18],
      20: [20, 20]
    },
    "big II": {
      20: [22, 22]
    },
    "stat": ["attack", "hp"]
  },
  "Might": {
    "normal": {
      "small": {
        10: 10,
        15: 12,
        20: 13
      },
      "medium": {
        10: 12,
        15: 14.5,
        20: 16
      },
      "big": {
        10: 15,
        15: 18,
        20: 20
      },
      "big II": {
        10: 16,
        15: 20,
        20: 22
      },
      "massive": {
        10: 17,
        15: 22,
        20: 25.5
      }
    },
    "omega": {
      "medium": {
        10: 12,
        15: 14.5,
        20: 20
      },
      "big": {
        10: 15,
        15: 18,
        20: 20
      }
    },
    "ex": {
      "small": {
        10: 10,
        15: 12
      },
      "medium": {
        10: 12,
        15: 14.5
      },
      "big": {
        10: 15,
        15: 18,
        20: 21
      },
      "massive": {
        10: 18,
        15: 23,
        20: 25.5
      },
      "unworldly": {
        10: 25,
        15: 33,
        20: 37
      }
    },
    "stat": "attack"
  },
  "Progression": {
    "medium": {
      10: .7,
      15: .8
    },
    "big": {
      10: 1,
      15: 1.2,
      20: 1.5,
    },
    "stat": "elementalAttackProgression"
  },
  "Stamina": {
    "normal": {
      "medium": {
        10: 7.76,
        15: 9.56,
        20: 10.5
      },
      "big": {
        10: 11.37,
        15: 15,
        20: 17
      },
      "big II":{
        10: 13.13,
        15: 17.79
      },
      "ancestral": 22.42,
    },
    "omega": {
      "medium": {
        10: 9.39,
        15: 11.98
      },
      "big": {
        10: 15,
        15: 17
      }
    },
    "stat": "stamina"
  },
  "Stratagem": {
    "big": {
      10: 1.4,
      15: 1.8
    },
    "stat": "amplifyCrit"
  },
  "Supremacy": {
    "massive": {
      10: 18,
      15: 23,
      20: 25.5
    },
    "stat": "attack"
  },
  "Tempering": {
    "small": {
      10: [2.5, 10000],
      15: [3.5, 12500]
    },
    "medium": {
      10: [3.2, 15000],
      15: [4.5, 18000]
    },
    "big": {
      10: [4, 20000],
      15: [5.5, 25000]
    },
    "stat": ["skillCap", "supplementalSkill"]
  },
  "Trium": {
    "small": {
      10: [2.5, 2.5],
      15: [3.5, 3.5]
    },
    "medium": {
      10: [3.5, 3.5],
      15: [5, 5],
      20: [6, 6]
    },
    "big": {
      10: [5, 5],
      15: [7, 7]
    },
    "big II": {
      10: [7, 7],
      15: [9, 9]
    },
    "stat": ["DA", "TA"]
  },
  "True Supramacy": {
    "massive": {
      10: [18, 12],
      15: [23, 14.5],
      20: [25.5, 16]
    },
    "stat": ["attack", "hp"]
  },
  "Verity": {
    "small": {
      10: 2,
      15: 3,
      20: 4
    },
    "medium": {
      10: 5,
      15: 6.5,
      20: 7.5
    },
    "big": {
      10: 8,
      15: 10,
      20: 11
    },
    "big II": {
      10: 10,
      15: 12
    },
    "massive": {
      10: 16,
      15: 20
    },
    "stat": "crit"
  }
};

export default VWS;