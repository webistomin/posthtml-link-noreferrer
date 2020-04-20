# posthtml-link-noreferrer <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]
![npm](https://img.shields.io/npm/dm/posthtml-link-noreferrer.svg)
[![Deps][deps]][deps-url]
[![DevDeps][dev-deps]][dev-deps-url]
[![Build][build]][build-badge]

This plugin add `rel="noopener"` and `rel="noreferrer"` to all links that contain the attribute `target="_blank"`.

Read more about problem in [google blog](https://developers.google.com/web/tools/lighthouse/audits/noopener).

**⭐️ Star us on GitHub — it helps!**

**Before:**
``` html
<a href="/" target="_blank">External link</a>
<a href="/" target="_blank" rel="nofollow">External link</a>
<a href="/" target="_self">Home</a>
```

**After:**
``` html
<a href="/" target="_blank" rel="noopener noreferrer">External link</a>
<a href="/" target="_blank" rel="nofollow">External link</a>
<a href="/" target="_self">Home</a>
```

## Demo
[**DEMO**](https://mathiasbynens.github.io/rel-noopener/)

## Install

```npm
npm i posthtml-link-noreferrer --save-dev
```

## Usage

### Gulp
```npm
npm i gulp-posthtml posthtml-link-noreferrer --save-dev
```

```js
const gulp = require('gulp');
const postHTML = require('gulp-posthtml');
const postHTMLNoRef = require('posthtml-link-noreferrer');

const config = () => ({
  plugins: [
    postHTMLNoRef({
      attr: ['noopener', 'noreferrer']
    }),
  ],
});

gulp.task('posthtml', () => gulp.src('./build/*.html')
  .pipe(postHTML(config))
  .pipe(gulp.dest('./build')));
```

### Webpack
```npm
npm i html-loader posthtml-loader posthtml-link-noreferrer  --save-dev
```

```js
module: {
  rules: [
    {
      test: /\.html$/,
      use: [
        'html-loader',
        {
          loader: 'posthtml-loader',
          options: {
            plugins: [
              require('posthtml-link-noreferrer')({
                attr: ['noopener', 'noreferrer']
              })
            ]
          }
        }
      ]
    }
  ]
}
```

## Options

| Option | Type | description | Possible subsets | Default value |
| ------ | ------ | ------ | ------ | ------ |
 attr | `array` | Describes rel attributes. | `'noopener'`, `'noreferrer'`, `'nofollow'` | `'noopener', 'noreferrer'` |

---
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
