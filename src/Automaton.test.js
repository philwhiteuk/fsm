import Automaton from './Automaton';

describe('Automaton', () => {
  describe('default state', () => {
    it('should start at q1', () => {
      const automaton = new Automaton();
      expect(automaton.state).toBe('q1');
    });
  });
  describe('ready state', () => {
    it('should return true when state is q1 and command is 1', () => {
      const automaton = new Automaton('q1');
      const result = automaton.readCommands(['1']);
      expect(automaton.state).toBe('q2');
      expect(result).toBe(true);
    });
    
    it('should return true when state is q2 and command is 1', () => {
      const automaton = new Automaton('q2');
      const result = automaton.readCommands(['1']);
      expect(automaton.state).toBe('q2');
      expect(result).toBe(true);
    });

    it('should return true when state is q3 and command is 0 or 1', () => {
      let automaton = new Automaton('q3');
      let result = automaton.readCommands(['1']);
      expect(automaton.state).toBe('q2');
      expect(result).toBe(true)

      automaton = new Automaton('q3');
      result = automaton.readCommands(['0']);
      expect(automaton.state).toBe('q2');
      expect(result).toBe(true);
    });    
  });
  describe('not ready state', () => {
    it('should stay at q1 when state is q1 and command is 0', () => {
      const automaton = new Automaton('q1');
      const result = automaton.readCommands(['0']);
      expect(automaton.state).toBe('q1');
      expect(result).toBe(false);
    });    
    it('should move to q3 when state is q2 and command is 0', () => {
      const automaton = new Automaton('q2');
      const result = automaton.readCommands(['0']);
      expect(automaton.state).toBe('q3');
      expect(result).toBe(false);
    });
  })
});
