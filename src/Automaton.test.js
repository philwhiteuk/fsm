import Automaton from './Automaton';
import { assert } from 'chai';

describe('Automaton', () => {
  describe('#readCommands', () => {

    const trueTestData = [
      ['1'],
      ['1', '0', '0', '1'],
      ['1', '0', '0', '1', '0', '0'],
      ['1', '0', '0', '1', '0', '0', '1']
    ];

    trueTestData.forEach((input) => {
      it(`should return true for input ${input.toString()}`, () => {
        const automaton = new Automaton();
        assert.isTrue(automaton.readCommands(input));
      });
    });

    const falseTestData = [
      ['1', '0', '0', '1', '0'],
      ['1', '0', '0', '1', '0', '0', '1', '0'],
      ['1', '0', '0', '1', '0', '0', '1', '0'],
    ];
    falseTestData.forEach((input) => {
      it(`should return false for input ${input.toString()}`, () => {
        const automaton = new Automaton();
        assert.isFalse(automaton.readCommands(input));
      });
    });
  });
});
