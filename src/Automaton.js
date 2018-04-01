
export default class Automaton {
  constructor(initialState = 'q1') {
    this.state = initialState;
  }

  readCommands(commands = []) {
    commands.forEach(command => { this.newState = command });
    return this.state === 'q2';
  }

  set newState (command) {
    if(command === '1' || this.state === 'q3') {
      this.state = 'q2';
    } else {
      this.state = this.state === 'q1' ? 'q1' : 'q3';
    }
  }
}
