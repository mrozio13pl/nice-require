# nice-require

> Tries to import modules. It gracefully returns `undefined` if fails.

## Install

```bash
$ npm i nice-require
```

## Usage

```js
const niceRequire = require('nice-require');

const myModule = niceRequire('my-module-name');

if (myModule) {
    // Module was successfully imported.
}
```

Good solution when working with optional dependencies.

## API

### niceRequire (module)

Tries importing a specified `module`, returns `undefined` if fails.

### niceRequire.promise (module)

Tries dynamically importing a specified `module`, returns `undefined` if fails.<br>
**Note:** This won't work with file paths like `./index.js`.

#### module

Type: `string`<br>
Module you want to import.

## License

MIT