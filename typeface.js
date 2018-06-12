module.exports = ({ constants }) => {
  const numbers = [
    // 0
    ['██████',
      '██  ██',
      '██  ██',
      '██  ██',
      '██████'
    ],

    // 1
    ['████  ',
      '  ██  ',
      '  ██  ',
      '  ██  ',
      '██████'
    ],

    // 2
    ['██████',
      '    ██',
      '██████',
      '██    ',
      '██████'
    ],

    // 3
    ['██████',
      '    ██',
      '██████',
      '    ██',
      '██████'
    ],

    // 4
    ['██  ██',
      '██  ██',
      '██████',
      '    ██',
      '    ██'
    ],

    // 5
    ['██████',
      '██    ',
      '██████',
      '    ██',
      '██████'
    ],

    // 6
    ['██████',
      '██    ',
      '██████',
      '██  ██',
      '██████'
    ],

    // 7
    ['██████',
      '    ██',
      '    ██',
      '    ██',
      '    ██'
    ],

    // 8
    ['██████',
      '██  ██',
      '██████',
      '██  ██',
      '██████'
    ],

    // 9
    ['██████',
      '██  ██',
      '██████',
      '    ██',
      '██████'
    ],
  ];

  const numberSpace = [
    '  ',
    '  ',
    '  ',
    '  ',
    '  ',
  ];

  const numberSeperator = [
    '    ',
    '    ',
    '    ',
    '    ',
    '    ',
  ];

  return {
    numbers,
    numberSpace,
    numberSeperator,
  }
};
