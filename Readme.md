# Testing

We could use Mocha & Chai, but let's use Jest. I've never used it in a project that I created, so we'll learn together.

[Getting started with Jest](https://facebook.github.io/jest/docs/en/getting-started.html)

```
npm install --save-dev jest
```

## Fundamentals

The three A's:

1. Assemble
2. Act
3. Assert

The first A is stupid; let's just call it "setup".

1. Setup
2. Act
3. Assert

## Jest Globals

In your test files, Jest puts each of these methods and objects into the global environment. You don't have to require or import anything to use them.

```js
afterAll(fn, timeout)
afterEach(fn, timeout)
beforeAll(fn, timeout)
beforeEach(fn, timeout)
describe(name, fn)
describe.only(name, fn)
describe.skip(name, fn)
require.requireActual(moduleName)
require.requireMock(moduleName)
test(name, fn, timeout)  // alias: it(name, fn, timeout)
test.only(name, fn, timeout)
test.skip(name, fn)
```

Eslint hates globals, though. So you can add a `"globals"` section to your `.eslintrc` file:

```js
"globals": {
    "describe": false,
    "it": false,
    "xit": false,
    "expect": false,
    "jest": false
},
```

## Jest Expect methods

https://facebook.github.io/jest/docs/en/expect.html

Common methods:

```js
.toBeDefined()
.toBeTruthy()
.toBeFalsy()

.toEqual(value)
.toContain(item)

.toBeGreaterThan(number)
.toBeGreaterThanOrEqual(number)
.toBeLessThan(number)
.toBeLessThanOrEqual(number)

.toBeNull()
.toBeUndefined()

.toHaveLength(number)

.toHaveProperty(keyPath, value)

.toMatchSnapshot(optionalString)

.toThrow(error)
```

## Jest usage tips

Prefix tests with 'x' to skip them. This is like commenting them out. For ex:

```js
it('this one will run', () => { /* ... */ });

xit('this one will not', () => { /* ... */ });
```

## Mocking

https://facebook.github.io/jest/docs/en/manual-mocks.html
