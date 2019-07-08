'use strict'

const test = require('ava')
const plugin = require('../lib/index')
const { readFileSync } = require('fs')
const path = require('path')
const posthtml = require('posthtml')
const fixtures = path.join(__dirname, 'fixtures')

const customOptions = {
  attr: ['noopener', 'noreferrer', 'nofollow']
}

test('basic', (t) => {
  return compare(t, 'basic')
})

test('set custom options', (t) => {
  return compare(t, 'custom', customOptions)
})

function compare (t, name, options = {
  attr: ['noopener', 'noreferrer']
}) {
  const html = readFileSync(path.join(fixtures, `${name}.html`), 'utf8')
  const expected = readFileSync(path.join(fixtures, `${name}.expected.html`), 'utf8')

  return posthtml([plugin(options)])
    .process(html)
    .then((res) => {
      t.truthy(res.html === expected)
    })
}
