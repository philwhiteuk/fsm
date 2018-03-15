# Finite State Machine Test

Create a finite automaton that has three states.

Our simple automaton, accepts strings of `'0'` and `'1'` and should have three states, `q1`, `q2`, and `q3`.

`q1` is our start state. We begin reading commands from here.

`q2` is our "accept" state. We return true if this is our last state.

`q1` moves to `q2` when given a 1, and stays at `q1` when given a 0.
`q2` moves to `q3` when given a 0, and stays at `q2` when given a 1.
`q3` moves to `q2` when given a 0 or 1.

Our automaton should return whether we end in our "accept" state, or not (`true`/`false`.)

```js
readCommands(commands: string): boolean
```

Here's an example:

```js
const a = new Automaton();

const isAccepted = a.readCommands(['1', '0', '0', '1', '0']); // false
```

We make these transitions based on the input of ["1", "0", "0", "1", "0"],

```
1: q1 -> q2
0: q2 -> q3
0: q3 -> q2
1: q2 -> q2
0: q2 -> q3
```

We end in `q3`, which is not our "accept" state, so we return `false`.

You start with the bare bones of the Automaton class, as seen in ./src/Automaton.

The task is to make sure `readCommands` returns a boolean according to the spec above.

The automaton accepts an array of strings, rather than just numbers, or a number represented as a string: you may assume you will only be passed valid inputs.

## setup

To run tests:

```bash
nvm use
yarn
yarn test --watch
```
