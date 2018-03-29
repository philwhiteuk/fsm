import { createStore } from 'redux'

function fsm(state, action) {
  if(state === undefined) {
    return 'q1';
  }
  
  if (action.type === 'RUN_COMMAND') {
    if(action.command === '0') {
      switch (state) {
        case 'q1':
          return 'q1';
          break;
        case 'q2':
          return 'q3';
          break;
        default:
          return 'q2';
      }
    } else {
      return 'q2';
    }
  }

  return state;
}

export default class Automaton {
  constructor(initialState = undefined) {
    this.store = createStore(fsm, initialState);
  }

  readCommands(commands = []) {
    commands.forEach(command => this.store.dispatch({ type: 'RUN_COMMAND', command }));
    return this.state === 'q2';
  }

  get state () {
    return this.store.getState();
  }
}
