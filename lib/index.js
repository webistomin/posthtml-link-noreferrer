'use strict'

module.exports = function () {
  return function linkNoRef (tree) {
    tree.match({ tag: 'a', attrs: { rel: false, target: '_blank' } }, function (node) {
      node.attrs.rel = 'noopener noreferrer'
      return node
    })
  }
}
