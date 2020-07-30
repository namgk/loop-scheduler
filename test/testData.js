export default [
  {
    i: {
      elements: [],
      availability: 1,
      depth: 1
    },
    o: []
  },
  {
    i: {
      elements: [{_value: 2, id: 0}],
      availability: 1,
      depth: 1
    },
    o: []
  },
  {
    i: {
      elements: [{_value: 1, id: 0}],
      availability: 1,
      depth: 1
    },
    o: [[{_value: 1, id: 0}]]
  },
  {
    i: {
      elements: [{_value: 1, id: 0}],
      availability: 2,
      depth: 1
    },
    o: [[{_value: 1, id: 0}]]
  },
  {
    i: {
      elements: [{_value: 1, id: 0}],
      availability: 1,
      depth: 2
    },
    o: [[{_value: 1, id: 0}]]
  },
  {
    i: {
      elements: [
        {_value: 10, id: 0},
        {_value: 15, id: 1},
        {_value: 30, id: 2},
        {_value: 15, id: 3},
        {_value: 6, id: 4},
        {_value: 6, id: 5},
      ],
      availability: 60,
      depth: 2
    },
    o: [
      [{_value: 6, id: 5}, {_value: 6, id: 4}],
      [{_value: 10, id: 0}, {_value: 15, id: 1}],
      [{_value: 15, id: 3}, {_value: 30, id: 2}],
    ]
  },
  {
    i: {
      elements: [
        {_value: 10, id: 0},
        {_value: 15, id: 1},
        {_value: 30, id: 2},
        {_value: 15, id: 3},
        {_value: 6, id: 4},
        {_value: 6, id: 5},
        {_value: 30, id: 6},
        {_value: 30, id: 7},
      ],
      availability: 60,
      depth: 2
    },
    o: [
      [{_value: 6, id: 5}, {_value: 6, id: 4}],
      [{_value: 10, id: 0}, {_value: 15, id: 1}],
      [{_value: 15, id: 3}, {_value: 30, id: 2}],
    ],
    s: [{_value: 30, id: 6}, {_value: 30, id: 7}]
  },
  {
    i: {
      elements: [
        {_value: 10, id: 0},
        {_value: 15, id: 1},
        {_value: 30, id: 2},
        {_value: 15, id: 3},
        {_value: 6, id: 4},
        {_value: 6, id: 5},
        {_value: 30, id: 6},
      ],
      availability: 60,
      depth: 2
    },
    o: [
      [{_value: 6, id: 5}, {_value: 6, id: 4}],
      [{_value: 10, id: 0}, {_value: 15, id: 1}],
      [{_value: 15, id: 3}, {_value: 30, id: 2}],
    ]
  },
  {
    i: {
      elements: [
        {_value: 6, id: 0},
        {_value: 6, id: 1},
        {_value: 10, id: 2},
        {_value: 15, id: 3},
        {_value: 15, id: 4},
        {_value: 15, id: 5},
        {_value: 25, id: 6},
        {_value: 20, id: 7},
      ],
      availability: 57,
      depth: 2
    },
    o: [
      [{_value: 6, id: 5}, {_value: 6, id: 4}],
      [{_value: 10, id: 0}, {_value: 15, id: 1}],
      [{_value: 15, id: 3}, {_value: 15, id: 2}],
      [{_value: 20, id: 7}],
    ]
  },
]