# PostHTML Plugin Boilerplate <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Build][build]][build-badge]
[![Coverage][cover]][cover-badge]
[![Standard Code Style][style]][style-url]
[![Chat][chat]][chat-badge]

Clone this repo and explain what your plugin do and why thousands of people need it ;)

Before:
``` html
<html>
  <body>
    <p class="wow">OMG</p>
  </body>
</html>
```

After:
``` html
<svg xmlns="http://www.w3.org/2000/svg">
  <text class="wow" id="wow_id" fill="#4A83B4" fill-rule="evenodd" font-family="Verdana">
    OMG
  </text>
</svg>
```

## Install

Describe how big guys can install your plugin.

> npm i posthtml posthtml-plugin

## Usage

Describe how people can use this plugin. Include info about build systems if it's
necessary.

``` js
const fs = require('fs');
const posthtml = require('posthtml');
const posthtmlPlugin = require('posthtml-plugin');

posthtml()
    .use(posthtmlPlugin({ /* options */ }))
    .process(html/*, options */)
    .then(result => fs.writeFileSync('./after.html', result.html));
```

## Options

Describe all features of your plugin with examples of usage.

### Feature
Before:
``` html
<html>
  <body>
    <p>OMG</p>
  </body>
</html>
```
Add option:
``` js
const fs = require('fs');
const posthtml = require('posthtml');
const posthtmlPlugin = require('posthtml-plugin');

posthtml()
    .use(posthtmlPlugin({ feature: 'wow' }))
    .process(html/*, options */)
    .then(result => fs.writeFileSync('./after.html', result.html));
```
After:
``` html
<html>
  <body>
    <p class="wow">OMG</p>
  </body>
</html>
```

### Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](CONTRIBUTING.md).

### License [MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml.svg
[npm-url]: https://npmjs.com/package/posthtml

[deps]: https://david-dm.org/posthtml/posthtml.svg
[deps-url]: https://david-dm.org/posthtml/posthtml

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[build]: https://travis-ci.org/posthtml/posthtml.svg?branch=master
[build-badge]: https://travis-ci.org/posthtml/posthtml?branch=master

[cover]: https://coveralls.io/repos/posthtml/posthtml/badge.svg?branch=master
[cover-badge]: https://coveralls.io/r/posthtml/posthtml?branch=master


[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-badge]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
