const userRef = {
    groups: [
        { 
        id: 1,
        name: 'Group 1',
        mode: "rainbow",
        state: 0,
        color: 'ffff00',
        lights: [
            {
                id: 1,
                name: 'Light 1',
                state: false,
                color: 0xffff00,
                brightness: 50,
                mode: 'manual',
                sensors: {
                  motion: false,
                  sound: false,
                },
              },
              {
                id: 2,
                name: 'Light 2',
                state: false,
                color: 0xffff00,
                brightness: 50,
                mode: 'manual',
                sensors: {
                  motion: false,
                  sound: false,
                },
              },
        ]
        }
    ],
    lights: [
      {
        id: 1,
        name: 'Light 1',
        state: false,
        color: 0xffff00,
        brightness: 50,
        mode: 'manual',
        sensors: {
          motion: false,
          sound: false,
        },
      },
      {
        id: 2,
        name: 'Light 2',
        state: false,
        color: 0xffff00,
        brightness: 75,
        mode: 'manual',
        sensors: {
          motion: false,
          sound: false,
          }
        },
        {
        id: 3,
        name: 'Light 3',
        state: false,
        color: 0xffff00,
        brightness: 75,
        mode: 'manual',
        sensors: {
          motion: false,
          sound: false,
          }
        },
        {
        id: 4,
        name: 'Light 4',
        state: false,
        color: 0xffff00,
        brightness: 75,
        mode: 'manual',
        sensors: {
          motion: false,
          sound: false,
          }
        },
        {
        id: 5,
        name: 'Light 5',
        state: false,
        color: 0xffff00,
        brightness: 75,
        mode: 'manual',
        sensors: {
          motion: false,
          sound: false,
          }
        },
        {
        id: 6,
        name: 'Light 6',
        state: false,
        color: 0xffff00,
        brightness: 75,
        mode: 'manual',
        sensors: {
          motion: false,
          sound: false,
        },
      },
      {
        id: 7,
        name: 'Light 7',
        state: false,
        color: 0xffff00,
        brightness: 75,
        mode: 'manual',
        sensors: {
          motion: false,
          sound: false,
        },
      },
      {
        id: 8,
        name: 'Light 8',
        state: false,
        color: 0xffff00,
        brightness: 75,
        mode: 'manual',
        sensors: {
          motion: false,
          sound: false,
        },
      },
      {
        id: 9,
        name: 'Light 9',
        state: false,
        color: 0xffff00,
        brightness: 75,
        mode: 'manual',
        sensors: {
          motion: false,
          sound: false,
        },
      },
    ],
  };


const defaultProfile = {
  device: "0",
  username: "Flashbang",
  groups: [
    {
      id: 1,
      name: "All Lights",
      color: "ff5e00",
      state: false,
      mode: 'normal',
      brightness: 100,
      lights: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
      ],
      sensors: {
        motion: 0,
      }
    }
  ],
  lights: [
    {
      id: 1,
      name: "Light 1",
      state: 0,
      color: "ffff00"
    },
    {
      id: 2,
      name: "Light 2",
      state: 0,
      color: "ffff00"
    },
    {
      id: 3,
      name: "Light 3",
      state: 0,
      color: "ffff00"
    },
    {
      id: 4,
      name: "Light 4",
      state: 0,
      color: "ffff00"
    },
    {
      id: 5,
      name: "Light 5",
      state: 0,
      color: "ffff00"
    },
    {
      id: 6,
      name: "Light 6",
      state: 0,
      color: "ffff00"
    },
    {
      id: 7,
      name: "Light 7",
      state: 0,
      color: "ffff00"
    },
  ]
}

export {defaultProfile, userRef}