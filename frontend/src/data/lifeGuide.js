export const guideSections = [
  {
    title: 'returnHome',
    steps: [
      { text: 'departure', source: 'https://www.hikorea.go.kr/' },
      { text: 'payout', route: '/check#payout', routeLabel: 'navCheck', source: 'https://labor.moel.go.kr/' }
    ]
  },
  {
    title: 'settle',
    steps: [
      { text: 'status', source: 'https://www.hikorea.go.kr/' },
      { text: 'support', route: '/notices', routeLabel: 'navUpdates' }
    ]
  }
];
