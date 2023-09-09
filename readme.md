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

Try importing a specified `module`, return `undefined` if fails.

#### module

Type: `string`<br>
Module you want to import.

## License

MIT