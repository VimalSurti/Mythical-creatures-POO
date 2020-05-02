# Mythical Creatures

## Installation Steps

Before you can work on or run any of these tests, you need to make sure you install the dependencies.

## Installation Steps

1. Run `npm install`
2. Test that the unit tests are working: Run the command `npm test exercises/1/unicorn.test.js` in your terminal

You should see something like:

```shell
> mythical-creatures@1.0.0 test /Users/Sandro/Code/Simplon/mythical-creatures
> mocha "exercises/1/unicorn.test.js"

  Unicorn
    - should instantiate our good friend, Unicorn
    - should have a name
    - should have a color
    - should be white as default
    - should refute isWhite
    - should say sparklying stuff


  0 passing (6ms)
  7 pending
```

### Running the Tests

In your terminal, change into the `exercises` directory, and run the command `npm test exercises/1/unicorn.test.js`. To run other tests, just replace the number of the directory and the creature name.

Most of the tests are skipped. When you see `it.skip('should instantiate our good friend, Unicorn', () => {` in a test, it means that test has been skipped. They are skipped for a good reason - that way, when you run the test suite for the first time, you don't see tons of errors screaming at you in the terminal.

Unskip each test, one at a time in order, so you can concentrate on making one test pass. Unskip the test by deleting the `.skip` from the test's first line so it should look more like `it('should instantiate our good friend, Unicorn', () => {`. Run the test to see what kind of error you are getting, and then implement the code to make the test pass!

### Creature Order

- `unicorn`
- `vampire`
- `dragon`
- `hobbit`
- `pirate`
- `wizard`
- `medusa`
- `werewolf`
- `centaur`

### Extra Challenges

#### Extra Creatures

If you've done the creatures above and feel comfortable with those, try conquering a few more creatures!

- `direwolf`
- `fairy`
- `ogre`
- `sphinx`

#### `if` Statement Alternatives

How many `if` statements can you replace with conditional statements and logical operators? Can you challenge yourself to try out new modes of control flow?

#### Practicing new JavaScript features

Notice, some of the syntax with the tests and files are using newer JavaScript features introduced in es6, like arrow functions, block-scoped variables, and classes. See if you can start flexing your es6 muscles and write your solutions and tests using the new syntax!
