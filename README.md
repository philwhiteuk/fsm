# Finite State Machine Test

Description:

Create a finite automaton that has three states. Finite automatons are the same as finite state machines for our purposes.

Our simple automaton, accepts the language of A, defined as {0, 1} and should have three states,
`q1`, `q2`, and `q3`.

`q1` is our start state. We begin reading commands from here.
`q2` is our "accept" state. We return true if this is our last state.

`q1` moves to `q2` when given a 1, and stays at `q1` when given a 0.
`q2` moves to `q3` when given a 0, and stays at `q2` when given a 1.
`q3` moves to `q2` when given a 0 or 1.

Our automaton should return whether we end in our "accept" state, or not (`true`/`false`.)

Here's an example:

```javascript
var a = new Automaton();
// Do anything you need to set up this automaton's states.
var isAccepted = a.readCommands(["1", "0", "0", "1", "0"]);
```

We make these transitions based on the input of ["1", "0", "0", "1", "0"],

1 q1 -> q2
0 q2 -> q3
0 q3 -> q2
1 q2 -> q2
0 q2 -> q3

We end in `q3`, which is not our "accept" state, so we return `false`.

The input of ["1", "0", "0", "1", "0"] would cause us to return `false`, as we would end in `q3`.

You start with the bare bones of the Automaton class, as seen in ./src/Automaton. The task
is to complete the implementation.

You will have to define how the Automaton stores its state, and transitions between states based on the commands passed to readCommands.

As an aside, the automaton accepts an array of strings, rather than just numbers, or a number represented as a string, you may assume you will only be passed valid inputs.

Acceptance tests are included in the test file. Do not modify these. When all these tests pass this means your implementation is correct.

## setup

You will need node v6 installed.

Clone this repository.

Go into the fsm/ folder and run:

```bash
nvm use
yarn
```

To run the tests do:

```bash
yarn test
```
