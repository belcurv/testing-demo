# Testing

We could use Mocha & Chai, but let's use Jest. I've never used it in a project that I created, so we'll learn together.

[Getting started with Jest](https://facebook.github.io/jest/docs/en/getting-started.html)

```
npm install --save-dev jest
```

Stick Jest into some scripts:

```js
"scripts": {
  "test": "jest --watch",
  "test:coverage": "jest --coverage"
},
```

## Fundamentals

The three A's:

1. Assemble (aka Setup)
2. Act
3. Assert

## Types of tests

1.  **positive tests** - assert that something _is_. These test the "happy path" of your code.

2.  **negative tests** - assert that something _is not_: a search query is not found, or an "out-of-bounds" argument triggers a specific response. Consider edge-cases here.

3. **Exception tests** - assert that errors are thrown, promises are rejected, etc. correctly.

## What to test?

This is a good question. It's unrealistic to test everything. And it misses the point. You specifically want to test all logic that you create. Utility modules, Express route controller modules, database model modules, etc. should be covered by tests.

But does it make sense to write tests for your Node `server.js`? Probably not - all that file should do is set up the application and call other modules. If you have a lot of logic in your main `server.js` or `app.js`, consider refactoring that logic out and into testable modules.

Likewise, if you have an Express router module like this:

```js
router.route('/users')
  .get(usersCtrl.getAll)
  .post(usersCtrl.create);

router.route('/users/:id')
  .get(usersCtrl.getOne)
  .put(usersCtrl.update)
  .delete(usersCtrl.deleteUser);
```

I do not think it needs to be tested - all this module does is connect route paths to controller methods. Those controller methods need their own unit tests, but not this router module.

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

Eslint complains about globals. So add common Jest methods to a `"globals"` section in your `.eslintrc` file:

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

Jest uses expect-style assertions:

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

.resolves
.rejects

.toThrow(error)
```

## Disabling Tests

Prefix tests with 'x' to disable them. This is like commenting them out. For ex:

```js
it('this one will run', () => { /* ... */ });

xit('this one will not', () => { /* ... */ });
```

## Mocking

https://facebook.github.io/jest/docs/en/manual-mocks.html

Mocking means replacing a test subject's dependency with a fake dependency. We create a fake dependency to always act deterministically - we control it, so we can guarantee this. Why?: because we don't want our tests to succeed or fail due to a dependency that's out of our control.

With Jest, _mock_ dependencies must reside in a `__mocks__` subfolder adjacent to the module to be mocked.

In this demo, our `async_thing.js` module _depends on_ a `get_json.js` module. In this contrived example, `get_json.js` simulates a network request for a user, with `getTimeout` providing some "network latency". Mocking this module lets us avoid network latency issues, speeding up our tests. 200ms may not seem very slow, but when you have 30 tests that each take 200ms, it means that each full test run takes 6 seconds to complete. That gets annoying very fast.

Mock modules should expose the same interface as the real modules they replace, but simply return fake data in a predictable way. Thus our mock `get_json.js` module still resolves/rejects a promise with the same payloads as the real module.