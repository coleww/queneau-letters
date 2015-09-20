var tap = require('tap')

var queneauLetters = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(queneauLetters('world'), 'hello world', 'does it')
})
