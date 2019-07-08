# posthtml-link-noreferrer <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![DevDeps][dev-deps]][dev-deps-url]
[![Build][build]][build-badge]

Clone this repo and explain what your plugin do and why thousands of people need it ;)

Before:
``` html
<html>
  <body>
    <a href="/" target="_blank">External link</a>
    <a href="/" target="_blank" rel="nofollow">External link</a>
    <a href="/" target="_self">Home</a>
  </body>
</html>
```

After:
``` html
<html>
  <body>
    <a href="/" target="_blank" rel="noopener noreferrer">External link</a>
    <a href="/" target="_blank" rel="nofollow">External link</a>
    <a href="/" target="_self">Home</a>
  </body>
</html>
```

## Install

```npm
npm i posthtml-link-noreferrer --save-dev
```

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

[npm]: https://img.shields.io/npm/v/posthtml-link-noreferrer.svg
[npm-url]: https://npmjs.com/package/posthtml-link-noreferrer

[deps]: https://david-dm.org/posthtml/posthtml.svg
[deps-url]: https://david-dm.org/webistomin/posthtml-link-noreferrer

[dev-deps]: https://david-dm.org/webistomin/posthtml-link-noreferrer/dev-status.svg
[dev-deps-url]: https://david-dm.org/webistomin/posthtml-link-noreferrer?type=dev

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[build]: https://travis-ci.com/webistomin/posthtml-link-noreferrer.svg?token=CqDseQbTs4cMwNAwVsgp&branch=master
[build-badge]: https://travis-ci.com/webistomin/posthtml-link-noreferrer
