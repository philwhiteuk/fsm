
function reducer(state, command) {
  if(state === 'q3' || command === '1') {
    return 'q2';
  } else {
    return state === 'q1' ? 'q1' : 'q3';
  }
}

export default class Automaton {
  constructor(initialState = 'q1') {
    this.state = initialState;
  }

  readCommands(commands = []) {
    this.state = commands.reduce(reducer, this.state);
    return this.state === 'q2';
  }
}
