'use strict'

module.exports = function (options = {
  attr: ['noopener', 'noreferrer']
}) {
  return function linkNoRef (tree) {
    tree.match({ tag: 'a', attrs: { rel: false, target: '_blank' } }, function (node) {
      node.attrs.rel = options.attr.join(' ')
      return node
    })
  }
}
